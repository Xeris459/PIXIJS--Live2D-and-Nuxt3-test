<template>
    <div
        class="overflow-hidden absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800 flex items-center">
        <div class="relative flex flex-col gap-6 w-5/6 h-5/6 m-auto pt-10 text-white">
            <h1 class="font-black text-3xl z-[2]">
                <span class="gradient-text">Project AMV</span>
            </h1>

            <div class="grid gap-4 sm:overflow-y-hidden overflow-y-auto lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                <div class="box group" v-for="item, index in listAmv" :key="index">
                    <div class="bg-zinc-700 absolute z-[2] rounded-lg flex flex-col inset-[2px]">
                        <div class="h-[150px] overflow-hidden object-cover rounded-tr-lg rounded-tl-lg">
                            <img :src="item.image" alt="thumbnail"
                                class="w-full scale-100 group-hover:scale-125 transition-all duration-500">
                        </div>
                        <div class="px-4 py-3 flex gap-1 flex-col">
                            <div class="overflow-hidden w-full">
                                <div class="flex gap-2">
                                    <span class="tag" :class="tag.classBG" v-for="tag, indextag in item.tag"
                                        :key="indextag">{{ tag.title }}</span>
                                </div>
                            </div>
                            <h2 class="text-xl">{{ item.title }}</h2>
                            <div class="text-slate-300 font-sans text-xs">{{ item.desk }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="/bgPattern.svg" class="absolute bottom-0 left-0 w-full z-[0]">
        </div>
    </div>
</template>

<script setup lang="ts">
const listAmv = ref([
    {
        title: "The Journey - Honkai Fan Work 2021",
        tag: [{ title: "After Effect", classBG: "bg-red-400" }, { title: "Blender", classBG: "bg-red-400" }, { title: "Photoshop", classBG: "bg-red-400" }],
        image: "/thumbnail/the-journey.png",
        desk: "entry for Honkai Fan Work 2021",
        link: ""
    },
    {
        title: "Noname - Honkai Fan Work 2022",
        tag: [{ title: "After Effect", classBG: "bg-red-400" }, { title: "not done yet", classBG: "bg-blue-400" }, { title: "Photoshop", classBG: "bg-red-400" }],
        image: "/thumbnail/noname.png",
        desk: "entry for Honkai Fan Work 2022 but still not done because my after effect buggy",
        link: ""
    },
    {
        title: "Noname - Honkai Fan Work 2022",
        tag: [{ title: "After Effect", classBG: "bg-red-400" }, { title: "not done yet", classBG: "bg-blue-400" }, { title: "Photoshop", classBG: "bg-red-400" }],
        image: "/thumbnail/noname.png",
        desk: "entry for Honkai Fan Work 2022 but still not done because my after effect buggy",
        link: ""
    },
])
</script>

<style scoped lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.tag {
    @apply text-[9px] flex-none tracking-widest px-2 py-1 rounded-md border-zinc-500
}

.gradient-text {
    @apply bg-gradient-to-r bg-clip-text text-transparent from-rose-400 via-fuchsia-500 to-indigo-500
}

.gradient {
    @apply bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
}
</style>

<style scoped>
.box {
    position: relative;
    background: #1c1c1c;
    border-radius: 8px;
    width: 100%;
    height: 300px;
    overflow: hidden;
    transition: .1s ease-in;
}

.box::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 300px;
    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    opacity: 0;
    animation: animate 6s linear infinite;
    transition: 1s ease-in-out;
}

.box::after {
    content: '';
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 300px;
    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    animation: animate 6s linear infinite;
    animation-delay: -3s;
    transition: 1s ease-in-out;
    opacity: 0;
}

.box:hover::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 400px;
    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    animation: animate 6s linear infinite;
    opacity: 1;
}

.box:hover::after {
    content: '';
    z-index: 1;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 400px;
    transform-origin: bottom right;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    animation: animate 6s linear infinite;
    animation-delay: -3s;
    opacity: 1;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>