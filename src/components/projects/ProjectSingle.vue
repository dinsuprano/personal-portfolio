<script>
export default {
	props: ["project"],
};
</script>

<template>
	<a
		:href="project.link"
		target="_blank"
		class="block p-5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
	>
		<!-- <div>
            <img
                :src="project.img"
                :alt="project.title"
                class="rounded-t-xl border-none"
            />
        </div> -->

		<div class="text-center px-4 py-6">
            <p
                class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
            >
                {{ project.title }}
            </p>
			<p
                class="font-general-regular text-md text-ternary-dark dark:text-ternary-light mb-4 text-justify"
            >
                {{ project.description }}
            </p>
            <!-- <span
                class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
                >{{ project.category }}</span
            > -->
        </div>

		<!-- Tags -->
		<div class="flex flex-wrap gap-2 mt-3">
			<span
				v-for="tag in project.tags"
				:key="tag"
				class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded"
			>
				{{ tag }}
			</span>
		</div>
	</a>
</template>
