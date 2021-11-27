<template>
   <router-view/>
</template>

<style lang="scss">
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5E5E5E;
}

.boton{
  background: #F22539;
  align-items: center;
  padding: 11px 20px;
  border-radius: 60px;
  color: #fff;
  text-decoration: none;
  &:hover, &:active{
    background: #C00E20;
    color: #fff;
  }
}

#home{
  .fila{
    height: 70vh;
    margin-top: 14vh;
    @media only screen and (max-width: 600px) {
      margin-top: 10vh;   
    }
    .logo-pokemon{
      margin-left: 5% ;
      
    }
    h1{
      font-weight: 700;
      font-size: 26px;
    }
    p{
      font-size: 18px;
      line-height: 27px;
    }
  }
}

.lista{
  background: #E5E5E5;
  border: 1px solid transparent;
  .lista-poke{
    li{
      list-style: none;
      background: #fff;
      line-height: 27px;
    }
  }
}

</style>
