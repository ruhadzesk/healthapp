<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
a {
  cursor: pointer;
}
input {
  background-color: #EEE !important;
  padding-left: 7px !important;
}
input[disabled] {
    color: #AAA;
    cursor: not-allowed;
}
.mu-text-field-label.float {
  color: #777 !important;
  padding-left: 7px;
}
.mu-dialog {
  max-width: 620px;
}
.mu-content-block {
    padding: 16px;
}
.id {
  width: 75px;
}
#app {
  min-width: 800px;
}
.mu-td {
  text-overflow: ellipsis;
  overflow: hidden;
}
body {
  font-family: Roboto,Lato,sans-serif;
}
</style>
