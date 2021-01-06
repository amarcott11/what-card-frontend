<template>
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-6">
        <user-info>

        </user-info>
      </div>
      <div class="col-xl-8 col-lg-7 col-md-6">
        <questionnaire>

        </questionnaire>
        <user-cards-list>

        </user-cards-list>
      </div>
    </div>
</template>
<script>
import Questionnaire from "@/components/Questionnaire.vue";
import UserCardsList from "./UserProfile/UserCardsList.vue";
import UserInfo from "./UserProfile/UserInfo.vue";
export default {
  components: {
    Questionnaire,
    UserInfo,
    UserCardsList
  }
};
</script>
<style>
</style>
