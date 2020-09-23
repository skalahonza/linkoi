<template>
  <div id="app">
    <b-jumbotron
      header="LinkOI"
      lead="Waypoint for school subjects of CTU in Prague OI masters."
    >
    </b-jumbotron>
    <div id="nav">
      <router-link to="/first/summer">First year: Summer</router-link> |
      <router-link to="/second/winter">Second year: Winter</router-link> |
      <a target="_blank" href="https://github.com/skalahonza/linkoi">GitHub</a>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
