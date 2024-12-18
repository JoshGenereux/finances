<template>
  <app-main />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppMain } from "./components";

export default defineComponent({
  name: "App",
  components: {
    AppMain,
  },
});
</script>

<style scoped lang="css"></style>
