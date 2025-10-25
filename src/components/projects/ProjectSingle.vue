<script>
export default {
	props: ["project"],
};
</script>

<template>
	<a
		:href="project.link"
		target="_blank"
		class="group block relative overflow-hidden bg-secondary-light dark:bg-ternary-dark rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
	>
		<!-- Gradient overlay on hover -->
		<div class="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-blue-500/0 group-hover:from-amber-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>

		<!-- Card content -->
		<div class="relative p-6 sm:p-8">
			<!-- Header with icon -->
			<div class="flex items-start justify-between mb-4">
				<div class="flex-1">
					<!-- Project icon/badge -->
					<div class="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
						</svg>
					</div>

					<!-- Title -->
					<h3 class="font-general-semibold text-2xl text-primary-dark dark:text-primary-light font-bold mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
						{{ project.title }}
					</h3>
				</div>

				<!-- External link icon -->
				<div class="ml-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				</div>
			</div>

			<!-- Description -->
			<p class="font-general-regular text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
				{{ project.description }}
			</p>

			<!-- Tags -->
			<div class="flex flex-wrap gap-2">
				<span
					v-for="tag in project.tags"
					:key="tag"
					class="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-200"
				>
					{{ tag }}
				</span>
			</div>

			<!-- Bottom border accent -->
			<div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
		</div>
	</a>
</template>

<style scoped>
/* Limit description to 3 lines */
.line-clamp-3 {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
