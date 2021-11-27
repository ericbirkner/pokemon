<template>
  <loading v-if="showLoading"></loading>
  <!--<div>{{$store.state.favoritos}}</div>-->
  <div class="lista">
    <div class="container">
      <search></search>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <ul class="lista-poke">
            <li v-for="(pokemon, index) in pokemons"
              :key="'poke'+index"
              class="item">
              <a @click="openPokemon(pokemon)">{{ pokemon.name }}</a>
              <div class="fav" :class="checkFav(pokemon.name)?'selected':''" @click="addFavoriteStore(pokemon.name)"><i class="fa fa-star" aria-hidden="true"></i></div>
            </li>
          </ul>
          <div id="scroll-trigger" ref="infinitescrolltrigger"></div>
        </div>
        
      </div>
    </div>
    <modal v-if="verModal" :pokemonUrl="currentPoke"></modal>
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
      currentPoke:null
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
        console.log('pql:',data);
        this.verModal = true;
        this.currentPoke = data.url;
        
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
    }
  }
}
</style>