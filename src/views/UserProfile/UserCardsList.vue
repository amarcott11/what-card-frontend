<template>
  <card class="card" :title="title">
    <div class="mx-auto">
      <p>Coming Soon</p>
      <p-button type="info"
                round
                @click.native.prevent="saveCards">
        Set Test Data
      </p-button><br>
      <span class="text-success" v-if="success">
        Success!
      </span>
    </div>
  </card>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: "Credit Cards in My Wallet",
      data: null,
      success: false
    };
  },
  methods: {
    saveCards() {
      this.$store
        .dispatch('userattrs', {
          q1: 0,
          q2: 0,
          q3: 0,
          q4: 0,
          q5: 0
        })
        .then(() => {
          this.success = true;
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
          if (error.response.status === 404) {
            console.log(error.response.data.errors);
          }
        })
  },
  mounted() {
    axios.get("https://api.whatcardfor.me/api/cards")
      .then(response => {
        this.data = response.data.data;
      }).catch(error => {console.log(error);});
    }
  }
};
</script>
<style>
</style>
