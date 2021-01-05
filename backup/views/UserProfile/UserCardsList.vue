<template>
  <card class="card" :title="title">
    <div>
      <ul class="list-unstyled team-members">
        <li>
          <div class="row" v-for="item in members" :key="item.name">
            <div class="col-3">
              <div class="avatar">
                <img :src="item.image" alt="Circle Image" class="rounded img-fluid">
              </div>
            </div>
            <div class="col-6">
              {{item.name}}
              <br>
                <small>{{item.bank}}</small>
            </div>

            <div class="col-3">
              <p-button type="success" outline icon>
                <i class="fa fa-envelope"></i>
              </p-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <form @submit.prevent>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="saveCards">
            Save Changes
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      title: "Credit Cards in My Wallet",
      members: [
        {
          image: require("@/assets/img/faces/face-0.jpg"),
          name: "AAdvantage Aviator Business",
          bank: "Barclays"
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Ink Business Plus",
          bank: "Chase"
        },
        {
          image: require("@/assets/img/faces/face-1.jpg"),
          name: "Sapphire Preferred",
          bank: "Chase"
        }
      ]
    };
  },
  methods: {
    saveCards() {
      alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
