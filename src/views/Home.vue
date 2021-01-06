<template>
  <div>
    <!--Unregistered users fill out a questionaire to get targeted results-->
    <div class="row">
      <div class="col-md-8 mx-auto">
        <questionnaire v-if="!isLogged">
        </questionnaire>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 mx-auto">
        <card-suggestions>
        </card-suggestions>
      </div>
    </div>
  </div>
</template>
<script>
import { Questionnaire, CardSuggestions } from "@/components/index";
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    Questionnaire,
    CardSuggestions
  },
  computed: {
    ...mapGetters([
      'isLogged'
    ]),
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      data: null
    }
  }
};
</script>
<style>
</style>
