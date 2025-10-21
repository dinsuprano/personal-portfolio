<template>
  <svg
    viewBox="0 0 256 256"
    role="img"
    aria-label="N logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <mask id="n-cut" maskUnits="userSpaceOnUse">
        <rect width="256" height="256" fill="black" />
        <!-- Circular badge kept -->
        <circle cx="128" cy="128" r="112" fill="white" />
        <!-- Cut out the N -->
        <g fill="black">
          <!-- Left vertical -->
          <rect x="72" y="36" width="28" height="184" rx="14" />
          <!-- Right vertical -->
          <rect x="156" y="36" width="28" height="184" rx="14" />
          <!-- Diagonal connector -->
          <rect
            x="114"
            y="8"
            width="28"
            height="240"
            rx="14"
            transform="rotate(27 128 128)"
          />
        </g>
      </mask>
    </defs>

    <!-- Use currentColor so Tailwind text-* controls the logo color -->
    <rect width="256" height="256" fill="currentColor" mask="url(#n-cut)" />
  </svg>
</template>

<script>
export default {
  name: 'NLogo',
};
</script>