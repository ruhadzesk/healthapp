<template>
  <div>
    <mu-raised-button @click="back" v-if="showBack">Назад</mu-raised-button> 
    <mu-raised-button class="next" @click="next" v-if="showNext">Вперед</mu-raised-button> 
  </div>
</template>

<script>
export default {
  name: 'Paginator',
  props: {
    limit: Number,
    count: Number,
    offset: Number,
    callback: Function
  },
  computed: {
    showBack () {
      return this.offset > 0
    },
    showNext () {
      return this.count > this.offset + this.limit
    },
  },
  methods: {
    back () {
      this.callback(this.offset - this.limit)
    },
    next () {
      this.callback(this.offset + this.limit)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mu-raised-button {
  margin: 10px;
}
.next {
  float: right;
}
</style>
