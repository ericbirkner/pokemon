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
    cursor: pointer;
    background: #C00E20;
    color: #fff;
  }
  &.menu-button{
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-top: 12px;
    &.disabled{
      background: #BFBFBF;
    }
  }
}

.fav{
  background: #F5F5F5;
  position: absolute;
  border-radius: 50%;
  right: 15px;
  line-height: 1.5;
  top: 6px;
  width: 34px;
  height: 34px;
  color: #BFBFBF;
  text-align: center;
  cursor: pointer;
  &.selected, &:hover{
    color:#ECA539;
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

</style>
