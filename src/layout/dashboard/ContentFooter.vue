<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/dashboard'}">Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        Copyright &copy; 2021 Adam Marcott. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
</style>
