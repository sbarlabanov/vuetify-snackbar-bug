import Vue from "vue"

const store: { text: string|null, visible: boolean } = Vue.observable({text: null, visible: false})

export default store
