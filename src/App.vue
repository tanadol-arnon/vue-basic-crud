<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
    <div class="container">
      <router-link to="/" class="navbar-brand float-left">Vue-basic-crud</router-link>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link to="/" class="nav-link px-3">Create Product</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/view" class="nav-link">View Products</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  
</style>