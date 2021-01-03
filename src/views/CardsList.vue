<template>
    <div class="row">
      <div class="col-12">
        <card v-for="item in data" v-bind:key="item.id">
          <a target="_blank" v-bind:href="item.app_link">{{item.bank.name}} {{item.name}}</a> <br>
          Get a bonus of {{item.bonus}} <br>
        </card>
      </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: null
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/cards")
      .then(response => {
        this.data = response.data.data;
        console.log(this.data);
      }).catch(error => {console.log(error);});
  }
};
</script>
<style>
</style>
