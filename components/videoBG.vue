<script lang="ts" setup>
let getMediaType = (src: string) => {
    return 'video/' + src.split('.').pop()
}
</script>

<template>
    <section class="relative">
        <video
            class="bg-cover bg-center object-cover h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            autoplay playsinline loop muted ref="video">
            <source src="/video/Honkai.mp4" :type="getMediaType('@/assets/video/Honkai.mp4')">
        </video>
        <div class="absolute w-full flex justify-center items-center h-1/2">
            <slot name="name"></slot>
        </div>
        <div
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-400/30 via-fuchsia-500/30 to-indigo-500/30 flex justify-center items-center">
            <slot></slot>
        </div>
        <div class="absolute bottom-0 w-full flex justify-center items-center h-12">
            <slot name="about"></slot>
        </div>
    </section>
</template>