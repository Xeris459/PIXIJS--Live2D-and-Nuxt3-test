<template>
    <section class="absolute w-full h-full">
        <Navbar />
        <keep-alive>
            <transition :name="transitionType">
                <component :is="currentCompponent"></component>
            </transition>
        </keep-alive>
        <!-- <transition :name="transitionType" v-for="(state, index) in stateList" :key="state">
            <component v-show="currentState == index" :is="state">
            </component>
        </transition> -->
    </section>
</template>

<script setup>
import Home from "@/components/Home/section/beranda.vue";
import Amv from "@/components/Home/section/Amv.vue";

const emit = defineEmits(["removeLoading"]);
const isLoading = ref(false);
const currentState = ref(0);
const transitionType = ref("comSlideLeft")
const stateList = ref([markRaw(Home), markRaw(Amv)]);

const currentCompponent = computed(() => {
    return stateList.value[currentState.value]
})

let changePage = (e) => {
    var timeOut = 1000
    if (isLoading.value == false) {
        isLoading.value = true;

        if (e.deltaY < 0) {
            transitionType.value = "comSlideRight"
            setTimeout(() => {
                isLoading.value = false;
            }, timeOut);

            if (currentState.value - 1 < 0)
                return (currentState.value = stateList.value.length - 1);

            return currentState.value = currentState.value - 1;
        } else if (e.deltaY > 0) {
            transitionType.value = "comSlideLeft"
            setTimeout(() => {
                isLoading.value = false;
            }, timeOut);

            if (currentState.value + 1 >= stateList.value.length) return (currentState.value = 0);

            return currentState.value = currentState.value + 1;

        }
    }
};

onMounted(async () => {
    window.addEventListener("wheel", changePage);
});
</script>

<style scoped>
.comSlideLeft-enter-active,
.comSlideLeft-leave-active {
    transition: all 1s ease-out;
}

.comSlideLeft-leave-to {
    transform: translateX(-100%);
}

.comSlideLeft-enter-from {
    transform: translateX(100%);
}

.comSlideRight-enter-active,
.comSlideRight-leave-active {
    transition: all 1s ease-out;
}

.comSlideRight-leave-to {
    transform: translateX(100%);
}

.comSlideRight-enter-from {
    transform: translateX(-100%);
}
</style>
