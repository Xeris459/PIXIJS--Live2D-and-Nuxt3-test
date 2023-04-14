<script lang="ts" setup>
const video = ref(null)
const loading = ref(["Loading", "Loading.", "Loading..", "Loading..."])
const content = ref(["AMV", "PART MEP with #PartOfAMVID", "Comission", "Website", "After Effect Extension", "Self Project"])
const contentAbout = ref(["Anime Music Video", "PART Multi Edit Project with #PartOfAMVID for make AMV", "Comission i take", "Website i made", "After Effect Extension i made", "Self Project website, video, programs and other"])
const num = ref(0);
const numContent = ref(0);

setInterval(() => {
	if (num.value > 2) num.value = 0
	else num.value = num.value + 1
}, 300)

setInterval(() => {
	if (numContent.value > content.value.length - 2) numContent.value = 0
	else numContent.value = numContent.value + 1
}, 1000)
</script>

<template>
	<div class="absolute top-0 left-0 w-full h-full overflow-hidden z-40">
		<Suspense>
			<VideoBG class="w-full h-full">
				<div class="w-full z-50 m-auto text-white absolute flex justify-center items-center grdientText">
					<div class="flex w-5/6 flex-col gap-1">
						<div class="flex justify-between text-sm">
							<div class="tracking-widest">{{ loading[num] }}</div>
							<div>{{ content[numContent] }}</div>
						</div>
						<span class="grdient animate-text h-[2px] w-full"></span>
						<div class="text-xs">
							{{ contentAbout[numContent] }}
						</div>
					</div>
				</div>
				<template v-slot:name>
					<div class="text-5xl font-extrabold text-center grdientText">
						WELCOME TO XERIS459
					</div>
				</template>
				<template v-slot:about>
					<div class="flex justify-center gap-3 h-8">
						<a href="https://github.com/Xeris459" target="_blank">
							<Icon size="20" name="octicon:mark-github-16" class="text-white" />
						</a>
						<a href="https://www.facebook.com/Soft.AMVikry/" target="_blank">
							<Icon size="20" name="ion:logo-facebook" class="text-white" />
						</a>
						<a href="https://twitter.com/AxErisu" target="_blank">
							<Icon size="20" name="ion:logo-twitter" class="text-white" />
						</a>
					</div>
				</template>
			</VideoBG>
		</Suspense>
	</div>
</template>
