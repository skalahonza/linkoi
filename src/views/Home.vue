<template>
  <div class="home">
    <div id="app">
      <b-card
        v-for="subject in subjects"
        :key="subject.code"
        :title="subject.name"
        :sub-title="subject.code"
      >
        <b-button
          v-for="link in subject.links"
          :key="link"
          target="_blank"
          :href="link.address"
          variant="primary"
        >{{link.name}}</b-button>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      subjects: [
        {
          name: "Combinatorial Optimization",
          code: "B4M35KO",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/wiki/courses/ko/start"
            }
          ]
        },
        {
          name: "Theory of Algorithms",
          code: "B4M01TAL",
          links: [
            {
              name: "Math FELD",
              address:
                "http://math.feld.cvut.cz/demlova/teaching/tal_vyuka.html"
            },
            {
              name: "Moodle",
              address: "https://moodle.fel.cvut.cz/course/view.php?id=4542"
            }
          ]
        },
        {
          name: "Software Architectures",
          code: "B4M36SWA",
          links: [
            {
              name: "Moodle",
              address: "https://moodle.fel.cvut.cz/course/view.php?id=4982"
            }
          ]
        },
        {
          name: "Effective Software",
          code: "B4M36ESW",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/wiki/courses/b4m36esw/start"
            }
          ]
        },
        {
          name: "Planning for Artificial Intelligence",
          code: "B4M36PUI/BE4M36PUI",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/b192/courses/be4m36pui/start"
            }
          ]
        },
        {
          name: "Symbolic Machine Learning",
          code: "B4M46SMU/BE4M46SMU",
          links: [
            {
              name: "Courseware",
              address: "https://cw.fel.cvut.cz/wiki/courses/smu/start"
            }
          ]
        },
        {
          name: "Visualization",
          code: "B4M39VIZ",
          links: [
            {
              name: "Moodle",
              address: "https://moodle.fel.cvut.cz/enrol/index.php?id=4809"
            }
          ]
        },
        {
          name: "Spatial Design",
          code: "B4M39PTV",
          links: [
            {
              name: "Moodle",
              address: "https://moodle.fel.cvut.cz/enrol/index.php?id=4809"
            }
          ]
        }
      ]
    };
  }
});
</script>

<style lang="less">
</style>
