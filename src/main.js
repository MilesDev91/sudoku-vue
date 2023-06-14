import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/shared/header.vue'
import Solver from './components/Solver.vue'
import Grid from './components/Solver/Grid.vue'

const app = createApp(App);

app.component('Header', Header);
app.component('Solver', Solver);
app.component('Grid', Grid);

const mountedApp = app.mount('#app')


