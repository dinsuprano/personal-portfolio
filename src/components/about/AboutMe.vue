<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'A skilled software developer with a strong academic background in Software Technology. I hold a Bachelor of Computer Science with Honours from Universiti Kebangsaan Malaysia, where I studied core subjects such as Object-Oriented Programming, Advanced Databases, Operating Systems, Networking, Web Development, and Discrete Mathematics. My expertise lies in web development, specializing in technologies like Laravel, Livewire, PHP, and MySQL, alongside proficiency in programming languages such as JavaScript, Java, Python, and C. With a solid foundation in database management and system optimization, I am passionate about developing efficient and scalable applications while continuously exploring new advancements in technology.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-64"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
