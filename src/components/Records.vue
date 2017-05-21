<template>
  <div>
    <mu-content-block ><mu-table v-if="count">
      <mu-thead>
        <mu-th class="id">ID</mu-th>
        <mu-th>Доктор</mu-th>
        <mu-th>Пциент</mu-th>
        <mu-th>Диагноз</mu-th>
      </mu-thead>
      <mu-tr v-for="record in records" :key="record.id">
        <mu-td>{{record.id}}</mu-td>
        <mu-td>{{record.doctor_surname}} {{record.doctor_name}} {{record.doctor_patronymic}}</mu-td>
        <mu-td>{{record.patient_surname}} {{record.patient_name}} {{record.patient_patronymic}}</mu-td>
        <mu-td>{{record.diagnosis}}</mu-td>
        <!-- <mu-td><a :href="'#/patient/' + patient.id">Подробнее</a></mu-td> -->
      </mu-tr>
    </mu-table>
    <span v-else>Ничего не найдено</span>
    <paginator :offset="offset" :limit="limit" :count="count" :callback="getCars"/>
    </mu-content-block>
  </div>
</template>

<script>
export default {
	name: 'Records',
	data () {
  	return {
			records: [],
      count: 0,
			offset: 0,
			limit: 20,
			filter: {
        id: null,
				gos_sign: ''
			},
  		showForm: false,
      filtered: false
    }
	},
	created () {
		this.getRecords();
	},
	methods: {
  	// getCars (offset) {
   //    this.offset = (typeof offset == 'number') ? offset : 0;
   //    this.$http.post('/getCars', {
  	// 		token: this.$localStorage.get("token"),
  	// 		filter: this.filter,
  	// 		offset: this.offset,
  	// 		limit: this.limit
  	// 	}).then(function(data){
	  //  		console.log("Cars: ", data.body[0])
	  //  		if (data.body) {
   //        this.filtered = (!!this.filter.gos_sign);
   //        this.cars = data.body[0].o_data;
		 //    	this.count = +data.body[0].o_count;
  	// 	  } else
	  //   		this.$router.push('/login')
  	// 	});
  	// },
    getRecords () {
      this.records = [
      {
        id: 0,
        doctor_surname: "DocSur1",
        doctor_name: "DocName1",
        doctor_patronymic: "DocPat1",
        patient_surname: "PatSur1",
        patient_name: "PatName1",
        patient_patronymic: "PatPat1",
        diagnosis: "dead"
      },
      {
        id: 0,
        doctor_surname: "DocSur2",
        doctor_name: "DocName2",
        doctor_patronymic: "DocPat2",
        patient_surname: "PatSur2",
        patient_name: "PatName2",
        patient_patronymic: "PatPat2",
        diagnosis: "dead"
      },
      {
        id: 0,
        doctor_surname: "DocSur2",
        doctor_name: "DocName2",
        doctor_patronymic: "DocPat2",
        patient_surname: "PatSur2",
        patient_name: "PatName2",
        patient_patronymic: "PatPat2",
        diagnosis: "dead"
      },
      ]
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
