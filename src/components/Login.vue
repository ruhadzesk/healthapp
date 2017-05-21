<template>
  <div class="back">
  <mu-paper><form>
    <mu-text-field labelFloat label="Login" v-model="usrlogin" :underlineShow="false"/>
    <mu-divider />
    <mu-text-field labelFloat label="Password" type="password" v-model="usrpass" :underlineShow="false"/>
    <a v-if="fail">Неверный логин или пароль</a>
    <mu-divider />
    <mu-raised-button @click="login" type="submit"> Login </mu-raised-button>
  </form></mu-paper>
  </div>
</template>

<script>
import Tabs from './Tabs.vue'
export default {
  name: 'hello',
  data () {
    return {
      usrlogin: '',
      usrpass: '',
      fail: false
    }
  },
  methods: {
    login () {
      this.$http.post('/login', {
        login: this.usrlogin,
        password: this.usrpass
      }).then(function(data){
        if (!data.body.error) {
          this.$localStorage.set("token", data.body[0].o_token)
          this.$localStorage.set("id", data.body[0].o_id)
          this.$localStorage.set("name", data.body[0].o_surname + ' ' + data.body[0].o_name)
          this.$localStorage.set("project", "leasing")
          this.$router.push('/docs/leasing')
        } else {
          this.fail = true;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mu-paper {
  width: 296px;
    text-align: center;
    left: 50%;
    position: absolute;
    margin-top: 200px;
    margin-left: -148px;
}
.mu-text-field {
  margin: 0 20px 0 20px;
}
.mu-raised-button {
  margin: 10px;
}
.back {
  position:fixed;
  padding:0;
  margin:0;

  top:0;
  left:0;

  width: 100%;
  height: 100%;
  background-color: lightgray;
}
</style>
