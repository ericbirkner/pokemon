import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


let app = createApp(App)

// 2. Assign the global variable before mounting
app.config.globalProperties.appName = 'Pokemon';
app.config.globalProperties.imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
app.config.globalProperties.apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

app.use(store).use(router).mount('#app')
