<template>
  <div class="home">
    <b-card
      v-for="subject in subjects"
      :key="subject.code"
      :title="subject.name"
      :sub-title="subject.code"
    >
      <b-button-group>
        <b-button
          v-for="link in subject.links"
          :key="link.address"
          target="_blank"
          :href="link.address"
          v-bind:variant="linkType(link.name)"
        >{{link.name}}</b-button>
      </b-button-group>
    </b-card>
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
          return "danger";
        case "Brute":
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
          name: "Useful Links",
          code: "",
          links: [
            {
              name: "Office 365",
              address: "https://office365.cvut.cz",
            },
            {
              name: "Lectures/Labs recordings",
              address: "https://web.microsoftstream.com/browse?view=group",
            },
            {
              name: "Moodle",
              address: "https://moodle.fel.cvut.cz/",
            },
            {
              name: "Brute",
              address: "https://cw.felk.cvut.cz/brute/student/",
            },
          ],
        },
        {
          name: "Big Data Technologies",
          code: "B0M33BDT",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/wiki/courses/b0m33bdt/start?animal=wiki",
            },
          ],
        },
      ],
    };
  },
});
</script>