<template>
    <div>
        <v-snackbar v-model="visible">
            {{text}}
        </v-snackbar>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import store from "@/store"

  @Component
  export default class SnackbarOk extends Vue {
    get visible(): boolean {
      return store.visible
    }

    set visible(b: boolean) {
      store.visible = b
    }

    get text(): string | null {
      return store.text
    }
  }

</script>

<style scoped>

</style>
