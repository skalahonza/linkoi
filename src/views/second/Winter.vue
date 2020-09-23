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
          >{{ link.name }}</b-button
        >
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
        case "Google":
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
          name: "System security (Bezpečnost systémů)",
          code: "B4M36BSY",
          links: [
            {
              name: "Moodle",
              address: "https://moodle.fel.cvut.cz/course/view.php?id=5412",
            },
            {
              name: "Google",
              address: "https://sites.google.com/aic.fel.cvut.cz/b4m36bsy/",
            },
            {
              name: "Teams",
              address:
                "https://teams.microsoft.com/l/team/19%3a2320318e467d41f0b05ef4cd541ab72b%40thread.tacv2/conversations?groupId=0b3ee019-4c67-4115-aedd-d593d8e47540&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8",
            },
            {
              name: "Mailing List",
              address:
                "https://list.feld.cvut.cz/cgi-bin/mailman/listinfo/b4m36bsy",
            },
          ],
        },
        {
          name: "Parallel Algorithms",
          code: "BE4M35PAG",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/wiki/courses/pag/start",
            },
            {
              name: "Teams",
              address:
                "https://teams.microsoft.com/l/channel/19%3a2b18107c58c4420981843d8c216480a6%40thread.tacv2/General?groupId=f11be53f-9eb4-496f-a17f-b694440d33ac&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8",
            },
          ],
        },
                {
          name: "Ontologies and Semantic Web",
          code: "B4M36OSW",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/wiki/courses/osw/start",
            },
          ],
        },
        {
          name: "Statistical Machine Learning",
          code: "BE4M33SSU",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/wiki/courses/be4m33ssu/start",
            },
          ],
        },
        {
          name: "Evoluční optimalizační algoritmy",
          code: "A0M33EOA",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/wiki/courses/a0m33eoa/start",
            },
          ],
        },
        {
          name: "Big Data Technologies",
          code: "B0M33BDT",
          links: [
            {
              name: "Courseware",
              address:
                "https://cw.fel.cvut.cz/wiki/courses/b0m33bdt/start?animal=wiki",
            },
          ],
        },
        {
          name:
            "Internet Applications Development (Vývoj internetových aplikací)",
          code: "A4M33VIA",
          links: [
            {
              name: "Google",
              address: "https://sites.google.com/a/via.felk.cvut.cz/via/",
            },
          ],
        },
        {
          name: "Matlab",
          code: "BE0B17MTB",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/wiki/courses/be0b17mtb/start",
            },
            {
              name: "Teams",
              address:
                "https://teams.microsoft.com/l/team/19%3a5599e3b45df6460692a4d4985bb70d2c%40thread.tacv2/conversations?groupId=9ac0a2f1-ad5a-4920-bb79-a25f303730b5&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8",
            },
          ],
        },
      ],
    };
  },
});
</script>
