<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/faces/face-2.jpg" alt="...">
        <h4 class="title">{{user.user.name}}
          <br>
          <a href="#">
            <small>{{user.user.email}}</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        Created account January 2021
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div class="col-md-12">
          <h5>54
            <br>
            <small>Cards in My Wallet</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      details: [
        {
          title: "12",
          subTitle: "Files"
        },
        {
          title: "2GB",
          subTitle: "Used"
        },
        {
          title: "24,6$",
          subTitle: "Spent"
        }
      ]
    };
  },
  computed: {
    ...mapState({
        user: 'user'
    })
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  }
};
</script>
<style>
</style>
