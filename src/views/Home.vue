<template>
  <div class="home">
    <div id="app">
      <div v-for="subject in subjects" :key="subject.code">
        <h2>{{subject.name}}</h2>
        <h3>{{subject.code}}</h3>
        <div class="link-group">
          <p v-for="link in subject.links" :key="link">
            <img src="../assets/link.png" />
            <a target="_blank" :href="link.address">{{link.name}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      msg: "Hello",
      subjects: [
        {
          name: "Combinatorial Optimization",
          code: "B4M35KO",
          links: [
            {
              name: "Course Ware",
              address: "https://cw.fel.cvut.cz/wiki/courses/ko/start"
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
