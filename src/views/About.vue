<script>
import AboutMe from '@/components/about/AboutMe';
// import AboutCounter from '@/components/about/AboutCounter';
// import AboutClients from '@/components/about/AboutClients';
import AboutResume from '@/components/about/AboutResume';
import feather from 'feather-icons';

export default {
    name: 'About',
    components: {
        AboutMe,
        // AboutCounter,
        // AboutClients,
        AboutResume,
    },
    data: () => {
        return {};
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
    methods: {},
};
</script>

<template>
    <div>
        <!-- About me -->
        <div class="container mx-auto">
            <AboutMe />
        </div>

        <!-- About counter -->
        <!-- <AboutCounter /> -->

        <!-- About resume -->
        <div class="container mx-auto">
            <AboutResume />
        </div>

        <!-- About clients -->
        <!-- <div class="container mx-auto">
            <AboutClients />
        </div> -->
    </div>
</template>

<style scoped></style>
