<template>
  <div class="overflow-hidden w-full py-8 mt-10">
    <div
      class="flex items-center animate-scroll whitespace-nowrap"
      :style="{ animationDuration: duration + 's' }"
    >
      <div
        v-for="(logo, idx) in logos"
        :key="idx"
        class="mx-8 flex-shrink-0"
        style="width: 80px; height: 80px;"
      >
        <img :src="logo.src" :alt="logo.alt" class="w-full h-full object-contain" />
      </div>
      <!-- Duplicate for seamless loop -->
      <div
        v-for="(logo, idx) in logos"
        :key="'dup-' + idx"
        class="mx-8 flex-shrink-0"
        style="width: 80px; height: 80px;"
      >
        <img :src="logo.src" :alt="logo.alt" class="w-full h-full object-contain" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechCarousel",
  props: {
    duration: {
      type: Number,
      default: 30, // seconds for one full scroll
    },
  },
  data() {
    return {
      logos: [
        { src: require('@/assets/logos/python.png'), alt: 'Python' },
        { src: require('@/assets/logos/react.png'), alt: 'React' },
        { src: require('@/assets/logos/C.png'), alt: 'C' },
        { src: require('@/assets/logos/laravel.png'), alt: 'Laravel' },
        { src: require('@/assets/logos/php.png'), alt: 'PHP' },
        { src: require('@/assets/logos/postgress.png'), alt: 'Postgresql' },
        { src: require('@/assets/logos/mysql.png'), alt: 'MySQL' },
        { src: require('@/assets/logos/js1.png'), alt: 'JavaScript' },
        { src: require('@/assets/logos/java.png'), alt: 'Java' },
        { src: require('@/assets/logos/vue.png'), alt: 'Vue' },
      ],
    };
  },
};
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-scroll {
  animation-name: scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>