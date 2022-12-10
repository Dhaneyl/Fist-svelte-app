<!-- Js -->

<script>
    export let name;
    const handle = ({target}) =>{
        name = target.value;
    }
    
</script>

<!-- Html -->

<h1>Hello {name}!</h1>
<p class="p">Hope you are having a nice day</p>
<button on:click={()=>{name = ''}}>
    Click me if you dare
</button>
<input type="text" placeholder="write your name" 
class="text" on:keyup={handle}/>
<p>Your name have {name.length} characters</p>
<!-- Los eventos en svelte inician con dos puntos ej on:click -->

<!-- Css -->

<style>
    h1{
        font-size: 3rem;
    }

    .p{
        font-family: fantasy;
    }
    .text{
        font-size: 1.2rem;
    }
</style>