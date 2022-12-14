# Svelte + Vite

# Conditionals in svelte
<!-- {#if name.length === 0} -->
<!-- <p>You have not told me your name</p> -->
<!-- {:else} -->
<!-- <strong>Hey, {name}</strong> -->
<!-- {/if} -->
```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
