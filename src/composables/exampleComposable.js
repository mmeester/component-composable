import { ref } from 'vue';

const uiState = ref('idle');

/**
 * Auth composable wrapper for basic functionality
 */
export default function useAuth() {
  
  return { uiState }
  
}