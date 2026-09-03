<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { motion, useMotionValue, useSpring, useTransform } from 'motion-v'

const W = 72
const ANCHOR_X = W / 2
const REST = 58
const MAX_PULL = 130
const MAX_SWAY = 34
const THRESHOLD = 66
const H = REST + MAX_PULL + 30

const mounted = ref(false)
const dragging = ref(false)
const busy = ref(false)

const pullX = useMotionValue(0)
const pullY = useMotionValue(0)

const springX = useSpring(pullX, {
  stiffness: 180,
  damping: 12,
  mass: 0.9,
})

const springY = useSpring(pullY, {
  stiffness: 300,
  damping: 10,
  mass: 0.9,
})

const cordD = useTransform(
  [springX, springY],
  ([x, y]) => {
    const bx = ANCHOR_X + x
    const by = REST + y

    const ctrlX = ANCHOR_X + x * 0.55
    const ctrlY = by * 0.55

    return `
      M ${ANCHOR_X} 0
      Q ${ctrlX} ${ctrlY} ${bx} ${by}
    `
  }
)

const beadCx = useTransform(
  springX,
  x => ANCHOR_X + x
)

const beadCy = useTransform(
  springY,
  y => REST + y
)

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function startDrag(event) {
  if (busy.value) return

  dragging.value = true

  event.currentTarget.setPointerCapture?.(event.pointerId)

  origin.value = {
    x: event.clientX,
    y: event.clientY,
  }
}

const origin = ref({
  x: 0,
  y: 0,
})

function move(event) {
  if (!dragging.value) return

  pullX.set(
    clamp(
      event.clientX - origin.value.x,
      -MAX_SWAY,
      MAX_SWAY
    )
  )

  pullY.set(
    clamp(
      event.clientY - origin.value.y,
      0,
      MAX_PULL
    )
  )
}

function endDrag() {
  if (!dragging.value) return

  dragging.value = false

  const pulled = pullY.get()

  // volta para a posição original
  pullX.set(0)
  pullY.set(0)

  if (pulled >= THRESHOLD) {
    toggleTheme()
  }
}

function toggleTheme() {
  if (busy.value) return

  busy.value = true

  const root = document.documentElement

  const isDark = root.classList.contains('dark')
  const nextDark = !isDark

  // Posição atual do puxador
  const bead = document.querySelector(
    '.theme-rope-bead'
  )

  const rect = bead?.getBoundingClientRect()

  const ox = rect
    ? rect.left + rect.width / 2
    : window.innerWidth - 40

  const oy = rect
    ? rect.top + rect.height / 2
    : 40

  if (!document.startViewTransition) {
    root.classList.toggle('dark', nextDark)
    busy.value = false
    return
  }

  root.dataset.themeReveal = ''

  const transition = document.startViewTransition(() => {
    root.classList.toggle('dark', nextDark)
  })

  transition.ready.then(() => {
    const endRadius = Math.hypot(
      Math.max(ox, window.innerWidth - ox),
      Math.max(oy, window.innerHeight - oy)
    )

    root.animate(
      {
        clipPath: [
          `circle(0px at ${ox}px ${oy}px)`,
          `circle(${endRadius}px at ${ox}px ${oy}px)`,
        ],
      },
      {
        duration: 550,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    )
  })

  transition.finished.finally(() => {
    delete root.dataset.themeReveal
    busy.value = false
  })
}

onMounted(() => {
  mounted.value = true

  window.addEventListener('pointermove', move)
  window.addEventListener('pointerup', endDrag)
  window.addEventListener('pointercancel', endDrag)
  window.addEventListener('blur', endDrag)
})

onUnmounted(() => {
  window.removeEventListener('pointermove', move)
  window.removeEventListener('pointerup', endDrag)
  window.removeEventListener('pointercancel', endDrag)
  window.removeEventListener('blur', endDrag)
})
</script>

<template>
  <div
    v-if="mounted"
    class="theme-rope pointer-events-none select-none
           absolute left-6 top-0 z-[60] lg:right-8"
    :style="{
      width: `${W}px`,
      height: `${H}px`
    }"
  >
    <svg
      :width="W"
      :height="H"
      :viewBox="`0 0 ${W} ${H}`"
      class="overflow-visible text-primary"
      fill="none"
    >

      <!-- suporte -->
      <circle
        :cx="ANCHOR_X"
        cy="1"
        r="3"
        class="fill-primary/50"
      />

      <!-- corda -->
      <motion.path
        :d="cordD"
        stroke="currentColor"
        stroke-opacity="0.45"
        stroke-width="2"
        stroke-linecap="round"
      />

      <!-- área invisível para facilitar o clique -->
      <motion.circle
        :cx="beadCx"
        :cy="beadCy"
        r="22"
        fill="transparent"
        class="pointer-events-auto cursor-grab
               touch-none active:cursor-grabbing"
        @pointerdown="startDrag"
      />

      <!-- puxador -->
      <motion.circle
        class="theme-rope-bead fill-primary"
        :cx="beadCx"
        :cy="beadCy"
        r="8"
      />

    </svg>
  </div>
</template>