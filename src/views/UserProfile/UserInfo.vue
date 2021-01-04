<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/faces/face-0.jpg" alt="...">
        <h4 class="title">{{user.user.name}}
          <br>
          <a href="#">
            <small>{{user.user.email}}</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        Member since {{formatDate(user.user.created_at)}}
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div class="col-md-12">
          <h5>{{details.title}}
            <br>
            <small>{{details.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'
export default {
  data() {
    return {
      details:
        {
          title: "12",
          subTitle: "Cards in My Wallet"
        }
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
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
      }
    },
  }
};
</script>
<style>
</style>
