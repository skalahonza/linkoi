<template>
  <div class="home">    
      <b-card
        v-for="subject in subjects"
        :key="subject.code"
        :title="subject.name"
        :sub-title="subject.code"
      >
        <b-button
          pill
          v-for="link in subject.links"
          :key="link.address"
          target="_blank"
          :href="link.address"                                          
          v-bind:variant="linkType(link.name)"          
        >{{link.name}}</b-button>
      </b-card>    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({ 
  methods:{
    linkType: function (name: string): string{      
      switch(name){
        case "Moodle": return "primary";
        case "Courseware": return "success";
        case "Teams": return "info";
        default: return "secondary";
      }
    }
  }, 
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
              address: "http://math.feld.cvut.cz/demlova/teaching/tal_vyuka.html"
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
            },
            {
              name: "Teams",
              address: "https://teams.microsoft.com/l/team/19%3a465c54787d7e4b9b8740e58eeb9a5a55%40thread.tacv2/conversations?groupId=02e6b8d0-78a5-4e49-8367-9b952bc4cfac&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"
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
            },
            {
              name: "Teams",
              address: "https://teams.microsoft.com/l/team/19%3a5aad055a96f94e8abba8ad6fdffc0584%40thread.tacv2/conversations?groupId=5df990ab-0cb2-4268-acf9-53d5d14b4a78&tenantId=f345c406-5268-43b0-b19f-5862fa6833f8"
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