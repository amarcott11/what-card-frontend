<template>
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-6">
        <user-info>

        </user-info>
      </div>
      <div class="col-xl-8 col-lg-7 col-md-6">
        <edit-profile-form>

        </edit-profile-form>
        <user-cards-list>

        </user-cards-list>
      </div>
    </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCardsList from "./UserProfile/UserCardsList.vue";
import UserInfo from "./UserProfile/UserInfo.vue";
export default {
  components: {
    EditProfileForm,
    UserInfo,
    UserCardsList
  }
};
</script>
<style>
</style>
