<template>
  <div id="loading">
    <img src="../assets/bola.png" class="bola">
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#loading{
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 10;
  .bola{
    max-width: 25%;
    -webkit-animation: rotation 2s infinite linear;
  }
}

@-webkit-keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
}
</style>
