<template>
    <div class="mt-10 sm:mt-20">
        <p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
            {{ resumeHeading }}
        </p>
        <hr class="border-t-2 border-gray-300 dark:border-gray-600 mt-4">
        <div class="tabs mt-10 sm:mt-14">
            <button
                :class="{'active-tab': activeTab === 'education'}"
                @click="activeTab = 'education'"
            >
                Education
            </button>
            <button
                :class="{'active-tab': activeTab === 'experience'}"
                @click="activeTab = 'experience'"
            >
                Experience
            </button>
        </div>
        <div class="tab-content mt-4">
            <div v-if="activeTab === 'education'">
                <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-primary-light">Education</h2>
                <ul>
                    <li v-for="edu in education" :key="edu.id" class="mb-2">
                        <h3 class="text-xl font-medium text-primary-dark dark:text-primary-light">{{ edu.degree }}</h3>
                        <p class="text-gray-600 dark:text-gray-400">{{ edu.institution }}</p>
                        <p class="text-gray-500 dark:text-gray-300">{{ edu.year }}</p>
                    </li>
                </ul>
            </div>
            <div v-if="activeTab === 'experience'">
                <h2 class="text-2xl font-semibold mb-4 text-primary-dark dark:text-primary-light">Experience</h2>
                <ul>
                    <li v-for="exp in experience" :key="exp.id" class="mb-2">
                        <h3 class="text-xl font-medium text-primary-dark dark:text-primary-light">{{ exp.position }}</h3>
                        <p class="text-gray-600 dark:text-gray-400">{{ exp.company }}</p>
                        <p class="text-gray-500 dark:text-gray-300">{{ exp.year }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutResume',
    data() {
        return {
            activeTab: 'education',
            resumeHeading: 'Resume',
            education: [
                { id: 1, degree: 'Bachelor of Computer Science', institution: 'Universiti Kebangsaan Malaysia', year: '2021 - 2024' },
                { id: 2, degree: 'Diploma in Computer Science', institution: 'Kolej Profesional Beranang', year: '2018 - 2020' },
            ],
            experience: [
                // { id: 1, position: 'Software Developer', company: 'Company X', year: '2021 - Present' },
                { id: 1, position: 'Intern (Web Developer)', company: 'Rania Resources Sdn Bhd', year: '2023 - 2024' },
            ],
        };
    },
};
</script>

<style scoped>
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