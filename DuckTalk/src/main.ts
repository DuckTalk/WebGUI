import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.json'


import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import LoginView from './components/LoginView.vue'
import SigninView from './components/SignupView.vue'
import TheWelcome from './components/TheWelcome.vue'

const routes = [
    { path: '/', component: LoginView },
    { path: '/signup', component: SigninView},
    { path: '/landing', component: TheWelcome},
    { path: '/:pathMatch(.*)', component: LoginView }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

const app = createApp(App)

console.log("Router " , router)
app.use(router)

app.mount('#app')

router.push('/about')