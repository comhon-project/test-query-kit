<script setup>
import { Search } from "@query-kit/vue";
</script>

<template>
  <div class="root-app">
    <Search model="user" :columns="['last_name']" :limit="10" />
  </div>
</template>
