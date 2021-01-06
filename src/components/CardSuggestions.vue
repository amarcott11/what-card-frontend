<template>
  <card title="Card Suggestions">
    <div class="col-md-10 mx-auto">
      <carousel v-if="data" :perPage="1" :scrollPerPage="false" :navigationEnabled="true" :navigationClickTargetSize="20">
        <slide v-for="item in data" v-bind:key="item.id">
          <div style="padding: 30px;">
            <card class="shadow p-3 mb-5 bg-white rounded">
              <div class="card-body">
                <div class="mx-auto" style="text-align:center">
                  <p>
                    <a target="_blank" v-bind:href="item.app_link">{{item.bank.name}} {{item.name}}</a> <br>
                    Get a bonus of {{item.bonus}} <br>
                  </p>
                </div>
                <div class="col-md-10 mx-auto">
                  <img :src="require('../assets/img/card_img/' + item.img_path)" style="max-height:200px; overflow:auto;"/>
                </div>
                <br>
                <div class="mx-auto">
                  <p-button type="success"
                            block
                            @click.native.prevent="go_to_link(item.app_link)">
                    Apply for this card
                  </p-button>
                </div>
              </div>
            </card>
          </div>
        </slide>
      </carousel>
      <p v-else>There are no credit card suggestions at this time.</p>
    </div>
  </card>
</template>
<script>
import axios from 'axios';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'card-suggestions',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    go_to_link (app_link) {
      window.location.href = app_link;
    }
  },
  mounted() {
    axios.get("https://api.whatcardfor.me/api/cards", this.$store.filters)
      .then(response => {
        this.data = response.data.data;
      }).catch(error => {console.log(error);});
  }
};
</script>
<style>
</style>
