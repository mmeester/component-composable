<template>
  <h2>uiState in Componenent: {{ uiState }}</h2>
  
  <button @click="uiState = 'changed in component'">
    Change in component
  </button>
</template>

<script setup>
import exampleComposable from '../composables/exampleComposable';

const { uiState } = exampleComposable();
</script>