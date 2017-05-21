<template>
  <div>
    <mu-content-block ><mu-table v-if="count">
      <mu-thead>
        <mu-th class="id">ID</mu-th>
        <mu-th>Фамилия</mu-th>
        <mu-th>Имя</mu-th>
        <mu-th>Отчество</mu-th>
        <mu-th>Кровь</mu-th>
        <mu-th>Адрес</mu-th>
      </mu-thead>
      <mu-tr v-for="patient in patients" :key="patient.id">
        <mu-td>{{patient.id}}</mu-td>
        <mu-td>{{patient.surname}}</mu-td>
        <mu-td>{{patient.name}}</mu-td>
        <mu-td>{{patient.patronymic}}</mu-td>
        <mu-td>{{patient.bloodType}}{{patient.rhFactor}}</mu-td>
        <mu-td>{{patient.location}}</mu-td>
        <!-- <mu-td><a :href="'#/patient/' + patient.id">Подробнее</a></mu-td> -->
      </mu-tr>
    </mu-table>
    <span v-else>Ничего не найдено</span>
    <paginator :offset="offset" :limit="limit" :count="count" :callback="getPatients"/>
    </mu-content-block>
  </div>
</template>

<script>
export default {
  name: 'Patients',
  data () {
    return {
      patients: [],
      count: 0,
      offset: 0,
      limit: 20,
      filter: {
        id: null
      },
      showForm: false,
      filtered: false
    }
  },
  created () {
    this.getPatients();
  },
  methods: {
    // getCars (offset) {
   //    this.offset = (typeof offset == 'number') ? offset : 0;
   //    this.$http.post('/getCars', {
    //    token: this.$localStorage.get("token"),
    //    filter: this.filter,
    //    offset: this.offset,
    //    limit: this.limit
    //  }).then(function(data){
    //      console.log("Cars: ", data.body[0])
    //      if (data.body) {
   //        this.filtered = (!!this.filter.gos_sign);
   //        this.cars = data.body[0].o_data;
     //     this.count = +data.body[0].o_count;
    //    } else
    //      this.$router.push('/login')
    //  });
    // },
    getPatients (offset) {
      this.patients = [
        {
        id: 0,
        surname: "Surname1",
        name: "Name1",
        patronymic: "Patronymic1",
        bloodType: "1",
        rhFactor: "+",
        location: "Moscow"
        },
        {
        id: 1,
        surname: "Surname2",
        name: "Name2",
        patronymic: "Patronymic2",
        bloodType: "1",
        rhFactor: "+",
        location: "Moscow"
        },
        {
        id: 2,
        surname: "Surname3",
        name: "Name3",
        patronymic: "Patronymic3",
        bloodType: "1",
        rhFactor: "+",
        location: "Moscow"
        },
      ];
      this.count = 3;
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mu-float-button {
  margin: 15px 0 15px 15px;
  vertical-align: top;
}
.mu-text-field, .mu-raised-button {
  margin-left: 15px;
}
span {
  font-size: 1.2em;
  padding: 15px;
}
</style>
