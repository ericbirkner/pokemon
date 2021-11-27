<template>
  <div id="home" class="container">
    <div class="fila row align-items-center justify-content-center">
      <div class="col-9 col-md-6 col-lg-3" ><img src="../assets/poke.png" class="img-fluid logo-pokemon"></div>
      <div class="col-12">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-7" >
            <h1 class="mt-5">Welcome to Pokédex</h1>
            <p class="text-justify mt-4">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
            <p class="mt-5">
              <router-link to="/lista" class="boton">Get started</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',  
}
</script>


