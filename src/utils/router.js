import { Home } from '../pages/Home.js'
import { About } from '../pages/About.js'

const routes = {
  '/': Home,
  '/about': About,
}

export function router() {
  const app = document.querySelector('#app')

  const path = window.location.hash.slice(1) || '/'
  const page = routes[path] || Home

  app.innerHTML = page()
}