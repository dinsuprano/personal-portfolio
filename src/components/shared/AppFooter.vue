<script>
import feather from 'feather-icons';
import FooterCopyright from './FooterCopyright.vue';
import { socialLinks } from '../../data/socialLinks';

export default {
	components: { FooterCopyright },
	data() {
		return {
			socials: socialLinks,
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="container mx-auto">
		<div
			class="pt-20 sm:pt-30 pb-8 mt-20 border-t border-gray-200 dark:border-gray-800"
		>
			<!-- Footer social links -->
			<div
				class="flex flex-col justify-center items-center mb-12 sm:mb-20"
			>
				<p
					class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-8 sm:mb-10"
				>
					Let's Connect
				</p>
				<ul class="flex gap-6 sm:gap-8">
					<a
						v-for="social in socials"
						:key="social.id"
						:href="social.url"
						target="__blank"
						class="social-icon-container group"
					>
						<i
							:data-feather="social.icon"
							class="w-6 sm:w-7 h-6 sm:h-7 transition-transform duration-300 group-hover:scale-110"
						></i>
					</a>
				</ul>
			</div>

			<!-- Footer copyright -->
			<FooterCopyright />
		</div>
	</div>
</template>

<style scoped>
.social-icon-container {
	@apply relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl;
	@apply bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900;
	@apply border border-gray-200 dark:border-gray-700;
	@apply shadow-lg hover:shadow-2xl;
	@apply text-gray-600 dark:text-gray-400;
	@apply transition-all duration-300 ease-out;
	backdrop-filter: blur(10px);
}

.social-icon-container:hover {
	@apply border-amber-400 dark:border-amber-500;
	@apply text-amber-600 dark:text-amber-400;
	@apply bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900 dark:to-orange-900;
	transform: translateY(-4px);
}

.social-icon-container::before {
	content: '';
	@apply absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300;
	background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1));
}

.social-icon-container:hover::before {
	@apply opacity-100;
}
</style>
