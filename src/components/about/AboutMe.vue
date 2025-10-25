<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'A skilled software developer with a strong academic background in Software Technology. I hold a Bachelor of Computer Science with Honours from Universiti Kebangsaan Malaysia, where I studied core subjects such as Object-Oriented Programming, Advanced Databases, Operating Systems, Networking, Web Development, and Discrete Mathematics.',
				},
				{
					id:2,
					bio:
					'My expertise lies in web development, specializing in technologies like Laravel, Livewire, PHP, and MySQL, alongside proficiency in programming languages such as JavaScript, Java, Python, and C. With a solid foundation in database management and system optimization, I am passionate about developing efficient and scalable applications while continuously exploring new advancements in technology.'
				}
			
			],
		};
	},
};
</script>

<template>
	<!-- <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">

		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="h-48 w-48 rounded-full"
				alt=""
			/>
		</div>


		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div> -->
	

	<div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
            About Me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
			<img
				src="@/assets/images/profile.jpeg"
				class="h-48 w-48 rounded-full"
				alt=""
			/>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            <p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
			>
				{{ bio.bio }}
			</p>
          </div>
        </div>
      </div>
</template>
