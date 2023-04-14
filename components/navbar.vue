<template>
    <nav
        class="overflow-hidden absolute top-0 left-0 w-full border-0 pb-[2px] z-10 animate-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        <div class="w-full py-5 bg-zinc-800 text-white">
            <div class="w-10/12 m-auto flex justify-between items-center cursor-pointer">
                <router-link to="/" class="font-black tracking-widest font-sans text-2xl hover:bg-gradient-to-r hover:bg-clip-text
                    hover:text-transparent animate-text hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500">
                    Xeris459
                </router-link>
                <div class="flex gap-4 max-sm:hidden">
                    <router-link :to="item.url" v-for="(item) in MenuList" :key="item.title"
                        class="hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent animate-text hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500">{{
                            item.title
                        }}</router-link>
                </div>
                <div class="sm:hidden" v-show="!menuStatus">
                    <Icon size="30" name="nimbus:menu" class="text-white" @click="toggleMenu()" />
                </div>
                <div class="sm:hidden" v-show="menuStatus">
                    <Icon size="30" name="nimbus:close" class="text-white hidden" @click="toggleMenu()" />
                </div>
            </div>
        </div>
    </nav>
    <div class="overflow-hidden absolute w-full h-screen">
        <transition name="slide" class="h-screen">
            <div v-if="menuStatus"
                class="overflow-hidden absolute right-0 w-screen h-screen bg-zinc-800 z-[9] text-white text-2xl">
                <div class="flex flex-col text-center gap-4 p-5 py-24">
                    <router-link v-for="(item, index) in MenuList" :key="item.title" :to="item.url"
                        class="hover:bg-gradient-to-r hover:bg-clip-text
                        hover:text-transparent hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500">{{ item.title }}</router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const menuStatus = ref(false)
const MenuList = ref([
    {
        title: "AMV",
        url: "#AMV"
    },
    {
        title: "Part AMV",
        url: "#Part-AMV"
    },
    {
        title: "Comission",
        url: "#Comission"
    },
    {
        title: "AE Script",
        url: "#After-Effect-Script"
    },
    {
        title: "3D Learning",
        url: "#3D-learning"
    },
])

let toggleMenu = () => {
    menuStatus.value = !menuStatus.value
}

watch(width, (oldVal, newVal) => {
    if (newVal >= 640 && menuStatus.value == true) menuStatus.value = false
})
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
    transition: .8s ease-in-out;
}

.slide-enter-from {
    transform: translate(100%, 0);
}

.slide-leave-to {
    transform: translate(100%, 0);
}
</style>