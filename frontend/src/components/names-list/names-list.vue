<template>
  <div>
    <div>
      {{ currentName }}
    </div>
    <button v-on:click="calculateRandomName">
      random name
    </button>
    <button v-on:click="changeGender">
      change gender
    </button>
    <hr />
    <div v-for="item in names" v-bind:key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NAMES_QUERY } from "./graphql";
import { NameType } from "./types";

@Component({
  components: {
    NamesList
  },
  apollo: {
    names: {
      query: NAMES_QUERY,
      variables() {
        return {
          gender: this.gender
        };
      }
    }
  }
})
export default class NamesList extends Vue {
  gender = "male";
  loading = 0;
  names: Array<NameType> = [];
  currentName = "";

  calculateRandomName() {
    if (this.loading) {
      return "";
    }

    const randomNumber = Math.floor(Math.random() * this.names.length);

    this.currentName = this.names[randomNumber].name;
  }

  changeGender() {
    const newGender = this.gender === "male" ? "female" : "male";

    this.gender = newGender;
  }
}
</script>
