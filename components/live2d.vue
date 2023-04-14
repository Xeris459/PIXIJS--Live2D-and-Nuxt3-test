<template>
    <Transition name="slide" mode="out-in" appear>
        <canvas id="canvas" class="w-[50hw]" width="600"></canvas>
    </Transition>
</template>

<script setup>
import * as PIXI from 'pixi.js'
import { InteractionManager } from '@pixi/interaction';
import { Live2DModel } from 'pixi-live2d-display/cubism4';
import { useWindowSize } from '@vueuse/core'

const live2DState = useLive2D()

const prop = defineProps({
    maxWidht: {
        type: Number,
        default: 1440
    },
    minWidht: {
        type: Number,
        default: 400
    },
    distance: {
        type: Number,
        required: true
    },
    defaultLocation: {
        type: Number,
        required: true
    }
})

const Model = reactive({})
const app = reactive({})
const isFirstLoad = ref(true)
const { width } = useWindowSize()
const time = ref(null)

// model controller
let LoadModel = async (url, x = 300, scale = 0.16) => {
    const model = await Live2DModel.from(url);

    app.value.stage.addChild(model);

    model.scale.set(scale);
    Model.value = await model

    live2DState.saveModel(model)

    await calculateLocation(width.value)
}

let removeModel = () => {
    if (!isFirstLoad.value) Model.value.destroy()
}

// play expression / motion
let playMotion = (num) => {
    Model.value.motion("", num)
}

defineExpose({ playMotion, LoadModel })

// dinamis position
watch(width, (oldVal, newVal) => {
    calculateLocation(newVal)
})

let calculateLocation = (newVal) => {
    let n = prop.distance
    let maxX = prop.maxWidht
    let minX = prop.minWidht
    let resX = (100 * newVal) / maxX
    let minResX = (100 * minX) / maxX

    if (newVal <= maxX) {
        if (resX.toFixed(2) >= minResX.toFixed(2)) {
            let resN = (resX / 100) * n
            Model.value.x = resN - prop.defaultLocation
        }
    }
    else if (newVal >= maxX) {
        Model.value.x = prop.defaultLocation
        Model.value.y = 0
    }
}

// mounted
onMounted(async () => {
    app.value = new PIXI.Application({
        view: document.getElementById("canvas"),
        autoStart: true,
        backgroundAlpha: 0,
        resizeTo: window
    });
    app.value.loader.add('bunny', "/character/mao_pro_t02/mao_pro_t02.model3.json")
    app.value.loader.onProgress.add((a, b) => { console.log(a, b) });
    app.value.loader.onComplete.add(handleLoadComplete);

    live2DState.saveApp(app.value)

    await LoadModel("/character/mao_pro_t02/mao_pro_t02.model3.json")

    app.value.loader.load()

    function handleLoadComplete() {
        isFirstLoad.value = false
    }
})

onBeforeMount(() => {
    PIXI.extensions.add(InteractionManager)
    window.PIXI = PIXI;

    if (live2DState.getModel != null) live2DState.getModel.destroy()
})

await new Promise(async resolve => {
    setTimeout(() => {
        resolve()
    }, 3000)
})
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
    transition: 2s ease-in-out;
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