import {createLocalVue, mount} from '@vue/test-utils'
import Vuetify from "vuetify"
import SnackbarOk from "@/components/SnackbarOk.vue"
import store from "@/store"
import SnackbarNotOk from "@/components/SnackbarNotOk.vue"

const vue = createLocalVue()
vue.use(Vuetify)

describe('SnackbarOk component', () => {
    it('should render some text', () => {
        const wrapper = mount(SnackbarOk, {
            vuetify: new Vuetify(),
            localVue: vue
        })
        store.text = 'some text'
        store.visible = true
        console.log(wrapper.html())
        expect(wrapper.element.querySelector('.v-snack__content')!.textContent!.trim()).toBe('some text')
    })
})

describe('SnackbarNotOk component', () => {
    it('should render some text', () => {
        const wrapper = mount(SnackbarNotOk, {
            vuetify: new Vuetify(),
            localVue: vue
        })
        store.text = 'some text'
        store.visible = true
        console.log(wrapper.html())
        expect(wrapper.element.querySelector('.v-snack__content')!.textContent!.trim()).toBe('some text')
    })
})
