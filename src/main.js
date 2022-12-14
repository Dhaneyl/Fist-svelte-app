import './app.css'
// import App from './App.svelte'
import New from './New.svelte'

const app = new New({
  target: document.getElementById('app'),
  props:{
    name: 'Hiveder'
  }
})

export default app
