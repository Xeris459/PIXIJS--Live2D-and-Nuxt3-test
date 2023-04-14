<template>
	<div class="relative select-none h-screen overflow-hidden">
		<Transition name="a">
			<!-- <SplashScreen v-if="isLoadingA" />
			<Home v-else /> -->
			<keep-alive>
				<Suspense>
					<component :is="HomeSection"></component>
					<!-- <template #default>
						<HomeSection />
					</template> -->

					<template #fallback>
						<SplashScreen />
					</template>
				</Suspense>
			</keep-alive>
		</Transition>
	</div>
</template>

<script lang="ts" setup>
const HomeSection = defineAsyncComponent({
	loader: () => import("@/components/Home/index.vue"),
	delay: 2000
})
</script>

<style>
.a-enter-active,
.a-leave-active {
	transition: all 1s ease-out;
}

/* .a-leave-to {
	transform: translateY(-100%);
} */

.a-leave-to {
	transform: translateY(-100%);
}

/* .a-enter-from {
	transform: translateY(100%);
} */
</style>
