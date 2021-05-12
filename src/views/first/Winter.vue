<template>
  <div class="home">
    <div v-for="subject in subjects" :key="subject.code" style="border: none">
      <h4>{{ subject.name }}</h4>
      <h6>{{ subject.code }}</h6>
      <b-button-group>
        <b-button
          v-for="link in subject.links"
          :key="link.address"
          target="_blank"
          :href="link.address"
          v-bind:variant="linkType(link.name)"
          >{{ link.name }}</b-button
        >
      </b-button-group>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    linkType: function (name: string): string {
      switch (name) {
        case "Moodle":
          return "primary";
        case "Courseware":
          return "success";
        case "Teams":
          return "info";
        case "Office 365":
        case "YouTube":
        case "Google":
          return "danger";
        case "Brute":
        case "GitHub":
          return "dark";
        case "Forum":
          return "warning";
        default:
          return "secondary";
      }
    },
  },
  data() {
    return {
      subjects: [
        {
          name: "Pokročilé algoritmy (Advanced Algorithms)",
          code: "B4M33PAL",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/b201/courses/b4m33pal/start",
            }
          ],
        },
        {
          name: "Database Systems 2",
          code: "B4M36DS2",
          links: [
            {
              name: "Other",
              address: "https://www.ksi.mff.cuni.cz/~svoboda/courses/201-B4M36DS2/",
            }
          ],
        },
      ],
    };
  },
});
</script>
