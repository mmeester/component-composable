import { reactive } from 'vue';

const uiState = reactive({status: 'idle'});

/**
 * Auth composable wrapper for basic functionality
 */
export default function useAuth() {
  
  return { uiState }
  
}