<template>
  <div class="home">
    <NamesList msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NamesList from "@/components/names-list";

@Component({
  components: {
    NamesList
  }
})
export default class Home extends Vue {}
</script>
