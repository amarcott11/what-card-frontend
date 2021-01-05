<template>
  <div class="wrapper">
    <side-bar>
      <template v-if="isLogged" slot="links">
        <sidebar-link to="/home" name="Home" icon="ti-home"/>
        <sidebar-link to="/profile" v-bind:name="user.user.name" icon="ti-user"/>
        <div class="col-md-12">
          <p-button type="danger"
                    block
                    @click.native.prevent="logout">
            Logout
          </p-button>
        </div>
      </template>
      <template v-else slot="links">
        <sidebar-link to="/home" name="Home" icon="ti-home"/>
        <sidebar-link to="/login" name="Login" icon="ti-user"/>
        <sidebar-link to="/register" name="Create Account" icon="ti-plus"/>
      </template>
      <mobile-menu>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  computed: {
    ...mapGetters([
      'isLogged'
    ]),
    ...mapState({
    user: 'user'
    })
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
};
</script>
