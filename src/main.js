import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/shared/header.vue'
import Solver from './components/Solver/Solver.vue'
import GridContainer from './components/Solver/Grid/GridContainer.vue'
import GridCell from './components/Solver/Grid/GridCell.vue'

const app = createApp(App);

app.component('Header', Header);
app.component('Solver', Solver);
app.component('GridContainer', GridContainer);
app.component('GridCell', GridCell);

const mountedApp = app.mount('#app')


