export const useLive2D = defineStore('Live2D', {
    state: () => ({
        model: null,
        isLoaded: false,
        app: null,
    }),
    getters: {
        getModel: (state) => state.model,
        getApp: (state) => state.app,
        getIsLoaded: (state) => state.isLoaded,
    },
    actions: {
        saveModel(payload: any) {
            this.model = payload
        },
        saveApp(payload: any) {
            this.app = payload
        },
        saveLoadedState() {
            this.isLoaded = !this.isLoaded
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLive2D, import.meta.hot))
}