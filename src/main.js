import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Header from './components/shared/header.vue'
import Solver from './pages/TheSudokuSolver.vue'
import GridContainer from './components/Grid/TheGridContainer.vue'
import GridCell from './components/Grid/GridCell.vue'
import TheSudokuToolbar from './components/SudokuToolbar/TheSudokuToolbar.vue'

const app = createApp(App);

app.component('Header', Header);
app.component('Solver', Solver);
app.component('GridContainer', GridContainer);
app.component('GridCell', GridCell);
app.component('TheSudokuToolbar', TheSudokuToolbar)

const mountedApp = app.mount('#app')


