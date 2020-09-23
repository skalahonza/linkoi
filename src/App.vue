<template>
  <div id="app">
    <b-container>
      <div id="nav">
        <router-link to="/first/summer">First year: Summer</router-link> |
        <router-link to="/second/winter">Second year: Winter</router-link> |
        <a target="_blank" href="https://github.com/skalahonza/linkoi"
          >GitHub</a
        >
      </div>
      <h1>LinkOI</h1>
      <p>Waypoint for school subjects of CTU in Prague OI masters.</p>
      <b-button-group>
        <b-button
          target="_blank"
          variant="danger"
          href="https://office365.cvut.cz"
          >Office 365</b-button
        >
        <b-button
          target="_blank"
          variant="secondary"
          href="https://web.microsoftstream.com/browse?view=group"
          >Lectures/Labs recordings</b-button
        >
        <b-button
          target="_blank"
          variant="primary"
          href="https://moodle.fel.cvut.cz/"
          >Moodle</b-button
        >
        <b-button
          target="_blank"
          variant="dark"
          href="https://cw.felk.cvut.cz/brute/student/"
          >Burte</b-button
        >
      </b-button-group>
      <hr />
      <router-view />
    </b-container>
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
