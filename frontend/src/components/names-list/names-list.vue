<template>
  <div>
    <div v-if="loading">
      Generating...
    </div>
    <div v-else>
      {{name}}, a {{gender}} {{race}}
    </div>
    <button v-on:click="generateCharacter">
      Generate
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
import { pickRandom } from "./utils";

@Component({
  components: {
    NamesList
  },
  apollo: {
    names: {
      query: NAMES_QUERY,
      variables() {
        return {
          gender: this.gender,
          race: this.race
        };
      }
    }
  }
})
export default class NamesList extends Vue {
  gender = "male";
  race = "human";
  loading = 0;
  names: Array<NameType> = [];

  get name() {
    if (this.loading) {
      return "";
    }

    const randomNumber = Math.floor(Math.random() * this.names.length);

    return this.names[randomNumber].name;
  }

  changeGender() {
    const newGender = this.gender === "male" ? "female" : "male";

    this.gender = newGender;
  }

  generateCharacter() {
    this.gender = pickRandom(["male", "female"]);
    this.race = pickRandom(["human", "dwarf", "elf", "halfling"]);
  }
}
</script>
