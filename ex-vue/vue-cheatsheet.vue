// Vue Cheat Sheet

// Basic Setup (Vue 3)
<div id="app">{{ message }}</div>

<script src="https://unpkg.com/vue@3"></script>
<script>
const app = Vue.createApp({
  data() {
    return { message: 'Hello Vue!' }
  }
});
app.mount('#app');
</script>

// Template Syntax
<p>{{ message }}</p>

// Components

// Define a Component
const MyComponent = {
  template: `<div>Hello, {{ name }}!</div>`,
  props: ['name']
};

// Register Component
const app = Vue.createApp({});
app.component('my-component', MyComponent);
app.mount('#app');

// Props
// Usage example:
// <my-component name="Vue"></my-component>

// Reactive Data
data() {
  return {
    count: 0
  };
}

// Methods
methods: {
  increment() {
    this.count++;
  }
}

// Event Handling
<button @click="increment">Increment</button>

// Computed Properties
computed: {
  doubled() {
    return this.count * 2;
  }
}

// Watchers
watch: {
  count(newVal, oldVal) {
    console.log(`Count changed from ${oldVal} to ${newVal}`);
  }
}

// Conditional Rendering
<p v-if="isVisible">Visible!</p>
<p v-else>Hidden!</p>

// Lists Rendering
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>

// Two-Way Binding
<input v-model="name" />

// Lifecycle Hooks
mounted() {
  console.log('Component mounted');
}

// Vue Router (Basic example)
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');
