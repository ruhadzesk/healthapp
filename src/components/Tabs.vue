<template>
  <div>
    <mu-paper class="menu">
      <mu-appbar title="Меню"></mu-appbar>
      <mu-list>
        <mu-list-item title="Записи" href="#/records/current"/>
        <mu-list-item title="Архив" href="#/records/archive"/>
        <mu-list-item title="Пациенты" href="#/patients"/>
        <mu-list-item title="Врачи" href="#/doctors"/>
      </mu-list>
    </mu-paper>
    <mu-appbar :title="$route.name" class="title">
      <span slot="right"> {{name}} </span>
      <mu-icon-button icon="input" slot="right" @click="logout"/>
    </mu-appbar>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      activeTab: this.$route.path,
      project: ''
    }
  },
  computed: {
    name () {
      return this.$localStorage.get("name")
    }
   },
  created () {
    this.project = this.$localStorage.get('project');
  },
  methods: {
    'logout': function() {
      if (confirm("Выйти?")) {
        this.$localStorage.remove('token')
        this.$router.push('/login')
      }
    },
    handleTabChange (val) {
      this.project = val;
      this.$localStorage.set("project", val);
      (this.project == 'leasing') ? this.$router.push('/docs') : this.$router.push('/docs2');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  display: inline-block;
  width: 256px;
  position: fixed;
  top: 0;
  bottom: 0;
  /*margin: 16px 32px 16px 0;*/
}
.title {
  position: fixed;
  left: 256px;
  top: 0;
  right: 0;
  width: auto;

}
.content {
  padding-top: 64px;
  padding-left: 256px;
}
</style>
