import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/shared/header.vue'
import Solver from './components/Solver/Solver.vue'
import GridContainer from './components/Solver/Grid/GridContainer.vue'

const app = createApp(App);

app.component('Header', Header);
app.component('Solver', Solver);
app.component('GridContainer', GridContainer);

const mountedApp = app.mount('#app')


