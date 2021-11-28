<template>
  
    <div class="row mt-3 mb-5 d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <form @submit.prevent="setPokemonUrl">
            <div class="search"> <i class="fa fa-search" @click="setPokemonUrl"></i> <input type="search" class="form-control" placeholder="Search" v-model="searchvalue"> </div>
          </form>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'Search',
  props: [],
  data: () => {
    return {
      searchvalue: '',
    }
  },
  methods: {
    setPokemonUrl() {
      if(this.searchvalue !== ''){
        this.$parent.openPokemon(this.apiUrl + this.searchvalue);
      }
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search {
    position: relative;
    box-shadow: 0 0 40px rgba(51, 51, 51, .1)
}

.search input {
    height: 60px;
    text-indent: 25px;
    border: 2px solid #d6d4d4
}

.search input:focus {
    box-shadow: none;
    border: 2px solid blue
}

.search .fa-search {
    position: absolute;
    top: 20px;
    left: 16px
}

</style>
