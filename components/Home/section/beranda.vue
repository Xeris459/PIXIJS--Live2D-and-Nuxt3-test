<template>
    <div
        class="overflow-hidden absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800 flex items-center">
        <div class="grid grid-cols-1 w-5/6 h-5/6 m-auto items-center text-white z-[1]">
            <div class="relative flex flex-col w-full m-auto z-[2]">
                <h1 class="text-3xl font-sans align-middle">Welcome To</h1>
                <h1 class="text-3xl font-sans align-middle -mt-3"><span
                        class="bg-gradient-to-r bg-clip-text
                        text-transparent animate-text from-rose-400 via-fuchsia-500 to-indigo-500 font-black text-6xl">Xeris459</span> Website
                </h1>
                <div class="relative text-xs h-4 font-light tracking-widest text-gray-200 italic mt-1 overflow-hidden">
                    <div class="absolute animate-rolltext delay-1000 ease-out">
                        Xeris459 is a Freelancer <br><br>
                        Web Developer <br><br>
                        Motion Graphic <br><br>
                        Ringger
                    </div>
                </div>
                <div class="flex mt-5 text-base gap-3">
                    <a href="#" @click.prevent="live2D.playMotion(2)"
                        class="p-[2px] rounded-sm animate-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                        <div class="py-1 px-2 bg-zinc-800 rounded-sm text-xs">See My Work</div>
                    </a>
                    <a href="#" @click.prevent="live2D.playMotion(0)"
                        class="p-[2px] rounded-sm nimate-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                        <div class="py-1 px-2 bg-zinc-800 rounded-sm text-xs">My Script</div>
                    </a>
                </div>
                <div class="absolute -left-12 blur-[1px] -top-28 w-40">
                    <img src="/pattern.svg" class="w-[500px]" alt="" srcset="">
                </div>
            </div>
            <div class="absolute lg:left-1/3 md:left-24 left-0 w-full h-full">
                <keep-alive>
                    <Live2d ref="live2D" :distance="500" :defaultLocation="300" />
                </keep-alive>
            </div>
        </div>
        <div
            class="absolute overflow-hidden sm:right-7 sm:flex-col right-1/2 sm:top-1/2 bottom-6 z-[2] flex flex-row gap-2">
            <Transition name="slide" mode="out-in" appear>
                <Icon size="30" name="ion:logo-facebook" class="text-white !delay-500" />
            </Transition>
            <Transition name="slide" mode="out-in" appear>
                <Icon size="30" name="ion:logo-facebook" class="text-white !delay-1000" />
            </Transition>
        </div>
        <div class="absolute lg:right-10 md:right-14 right-5 bottom-40 blur-2xl backdrop-blur-sm opacity-60">
            <img src="/cirle.svg" class="w-[500px]" alt="" srcset="">
        </div>
    </div>
</template>

<script setup>
const live2D = ref(null)
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
    transition: 1s ease-in-out;
}

.slide-enter {
    transform: translate(0, 100%);
    opacity: 1;
}

.slide-enter-from {
    transform: translate(0, 3rem);
    opacity: 0;
}

.slide-leave-to {
    transform: translate(0 100%);
    opacity: 0;
}
</style>