<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
          <snackbar-ok></snackbar-ok>
          <snackbar-not-ok></snackbar-not-ok>
          <button @click="onBtnClick">Show snackbars</button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import SnackbarOk from "@/components/SnackbarOk.vue"
import SnackbarNotOk from "@/components/SnackbarNotOk.vue"
import store from "@/store"

export default Vue.extend({
  name: "HelloWorld",
    components: {SnackbarNotOk, SnackbarOk},
    methods: {
      onBtnClick() {
          store.text = 'Some text'
          store.visible = true
      }
    }
});
</script>
