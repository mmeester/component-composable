import exampleComponent from './src/components/exampleComponent.vue';
import exampleComposable from './src/composables/exampleComposable.js';

export const Example = {
    install(Vue) {
        Vue.component('ExampleComponent', exampleComponent);
    }
};

export const useExampleComposable = exampleComposable;

export default Example;
