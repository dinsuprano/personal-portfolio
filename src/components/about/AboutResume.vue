<template>
    <div class="py-12 sm:py-16">
        <!-- Section title -->
        <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-2">
                Resume
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400">
                My professional journey and educational background
            </p>
        </div>

        <!-- Timeline grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <!-- Experience Column -->
            <div class="space-y-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-semibold text-primary-dark dark:text-primary-light">
                        Experience
                    </h3>
                </div>

                <div class="relative pl-8 space-y-8">
                    <!-- Vertical timeline line -->
                    <div class="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

                    <div
                        v-for="item in experience"
                        :key="item.id"
                        class="relative"
                    >
                        <!-- Timeline dot -->
                        <div class="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-white dark:ring-gray-900"></div>

                        <!-- Content card -->
                        <div class="bg-secondary-light dark:bg-ternary-dark rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <span class="inline-block px-3 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full mb-3">
                                {{ item.period }}
                            </span>
                            <h4 class="text-xl font-semibold text-primary-dark dark:text-primary-light mb-1">
                                {{ item.role }}
                            </h4>
                            <p class="text-amber-600 dark:text-amber-400 font-medium mb-3">
                                {{ item.company }}
                            </p>
                            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Education Column -->
            <div class="space-y-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-semibold text-primary-dark dark:text-primary-light">
                        Education
                    </h3>
                </div>

                <div class="relative pl-8 space-y-8">
                    <!-- Vertical timeline line -->
                    <div class="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

                    <div
                        v-for="item in education"
                        :key="item.id"
                        class="relative"
                    >
                        <!-- Timeline dot -->
                        <div class="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-900"></div>

                        <!-- Content card -->
                        <div class="bg-secondary-light dark:bg-ternary-dark rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <span class="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full mb-3">
                                {{ item.period }}
                            </span>
                            <h4 class="text-xl font-semibold text-primary-dark dark:text-primary-light mb-1">
                                {{ item.degree }}
                            </h4>
                            <p class="text-blue-600 dark:text-blue-400 font-medium mb-3">
                                {{ item.institution }}
                            </p>
                            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutResume',
    data() {
        return {
            experience: [
                {
                    id: 1,
                    period: '2025 - Present',
                    role: 'Software Developer (Freelance)',
                    company: 'TNB Labs Sdn Bhd',
                    description: 'Develop a web application using Laravel for internal company use.',
                },
                {
                    id: 2,
                    period: '2023 - 2024',
                    role: 'Web Developer Intern',
                    company: 'Rania Resources Sdn Bhd',
                    description: 'Developed and maintained client projects with Livewire and Laravel.',
                },
                // {
                //     id: 3,
                //     period: '2018 - 2020',
                //     role: 'Frontend Developer',
                //     company: 'Startup Labs',
                //     description: 'Built responsive web interfaces and improved user experience.',
                // },
            ],
            education: [
                {
                    id: 1,
                    period: '2021 - 2024',
                    degree: 'Bachelor of Computer Science (Software Technology)',
                    institution: 'Universiti Kebangsaan Malaysia',
                    description: 'Specialized in Software Engineering and Web Technologies.',
                },
                {
                    id: 2,
                    period: '2018 - 2020',
                    degree: 'Diploma in Computer Science',
                    institution: 'Kolej Profesional Mara Beranang',
                    description: 'Learned foundational computer science concepts and programming skills.',
                },
                // {
                //     id: 3,
                //     period: '2019',
                //     degree: 'AWS Certified Solutions Architect',
                //     institution: 'Amazon Web Services',
                //     description: 'Cloud infrastructure and deployment certification.',
                // },
            ],
        };
    },
};
</script>

<style scoped>
/* Custom scrollbar for timeline if needed */
.space-y-8::-webkit-scrollbar {
    width: 4px;
}

.space-y-8::-webkit-scrollbar-track {
    @apply bg-gray-200 dark:bg-gray-700;
}

.space-y-8::-webkit-scrollbar-thumb {
    @apply bg-gray-400 dark:bg-gray-500 rounded-full;
}
.tabs {
    display: flex;
    gap: 1rem;
}
button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #e2e8f0;
    cursor: pointer;
}
button.active-tab {
    background-color: #d8a54e;
    color: white;
}
.tab-content {
    margin-top: 1rem;
}
</style>