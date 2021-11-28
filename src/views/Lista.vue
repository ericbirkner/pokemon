<template>
  <loading v-if="showLoading"></loading>
  <!--<div>{{$store.state.favoritos}}</div>-->
  <div class="lista">
    <div class="container">
      <search></search>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <ul class="lista-poke">

              <template v-for="(pokemon, index) in pokemons" :key="'poke'+index">
                <li class="item" v-if="(favoritesOn && checkFav(pokemon.name))">
                  <a @click="openPokemon(pokemon.url)">{{ pokemon.name }}</a>
                  <div class="fav" :class="checkFav(pokemon.name)?'selected':''" @click="addFavoriteStore(pokemon.name)"><i class="fa fa-star" aria-hidden="true"></i></div>
                </li>
                <li class="item" v-else-if="!favoritesOn">
                  <a @click="openPokemon(pokemon.url)">{{ pokemon.name }}</a>
                  <div class="fav" :class="checkFav(pokemon.name)?'selected':''" @click="addFavoriteStore(pokemon.name)"><i class="fa fa-star" aria-hidden="true"></i></div>
                </li>

              </template>
    
          </ul>
          <div id="scroll-trigger" ref="infinitescrolltrigger"></div>
        </div>
        
      </div>
    </div>
    
    <modal v-if="verModal" :pokemonUrl="currentPoke"></modal>
  </div>
  <div class="footer-menu shadow">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-6 col-md-4">
          <a @click="showFav(false)" class="boton menu-button" :class="(favoritesOn)?'disabled':''"><i class="fa fa-list me-1" aria-hidden="true"></i>All</a>
        </div>
        <div class="col-6 col-md-4">
          <a @click="showFav(true)" class="boton menu-button" :class="(favoritesOn)?'':'disabled'"><i class="fa fa-star me-1" aria-hidden="true"></i>Favorites</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import Loading from '../components/Loading.vue'
import Modal from '../components/Modal.vue'
export default {
  name: 'Lista',
  components: {
    Search,
    Loading,
    Modal
  },
  data: () => {
    return {
      showLoading: true,
      showDetail: false,
      pokemons: [],
      nextUrl: '',
      currentUrl: '',
      verModal: false,
      currentPoke:null,
      favoritesOn:false,
    };
  },
  methods: {
    fetchData() {
        this.showLoading = true;
        let req = new Request(this.currentUrl);
        fetch(req)
          .then((resp) => {
            if(resp.status === 200)
              this.showLoading = false;
              return resp.json();
          })
          .then((data) => {
            this.nextUrl = data.next;
            data.results.forEach(pokemon => {
              pokemon.id = pokemon.url.split('/')
                .filter(function(part) { return !!part }).pop();
              this.pokemons.push(pokemon);
            });
          })
          .catch((error) => {
            console.log(error);
          })
      },
      scrollTrigger() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.intersectionRatio > 0 && this.nextUrl) {
              this.next();
            }
          });
        });

        observer.observe(this.$refs.infinitescrolltrigger);
      },
      next() {
        this.currentUrl = this.nextUrl;
        this.fetchData();
      },
      
      addFavoriteStore(name){
          this.$store.commit('addFav', name)
      },
      checkFav(name){
        if(this.$store.state.favoritos.includes(name)){
          return true;
        }else{
          return false
        }        
      },
      openPokemon(data){
        this.verModal = true;
        this.currentPoke = data;        
      },
      showFav(valor){
        this.favoritesOn = valor;
      }
  },
  created() {
    this.currentUrl = this.apiUrl;
    console.log(this.apiUrl);
    this.fetchData();
  },
  mounted() {
    this.scrollTrigger();
    console.log(this.$store)
  }
}
</script>
<style lang="scss" scoped>
.lista{
  background: #E5E5E5;
  border: 1px solid transparent;
  padding-bottom: 100px;
  min-height: 100vh;
  .lista-poke{
    padding: 0;
    margin: 0;
    li{
      list-style: none;
      background: #fff;
      line-height: 27px;
      text-align: left;
      font-size: 22px;
      padding: 10px 15px;
      margin: 0 0 15px 0;
      position: relative;
      a{
        cursor: pointer;
      }
      
    }
  }
}
.footer-menu{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background: #fff;
  
}
</style>