<template>
    <div class="row">
      <div class="col-12">
        <card class="col-md-8 mx-auto" v-for="item in data" v-bind:key="item.id">
          <div class="card-body">
            <v-row>
              <v-col class="text-right">
                <a target="_blank" v-bind:href="item.app_link">{{item.bank.name}} {{item.name}}</a> <br>
                Get a bonus of {{item.bonus}} <br>
              </v-col>
              <v-col class="text-left">
                <img :src="require('../assets/img/card_img/' + item.img_path)"/>
              </v-col>
              <p-button type="success"
                      block
                      @click.native.prevent="create_account">
              Apply
            </p-button>
            </v-row>
          </div>
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
    axios.get("https://api.whatcardfor.me/api/cards")
      .then(response => {
        this.data = response.data.data;
      }).catch(error => {console.log(error);});
  }
};
</script>
<style>
</style>
