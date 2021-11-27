import { createStore } from 'vuex'

let favoritos = window.localStorage.getItem('favoritos');

export default createStore({
  state: {
    favoritos: favoritos ? JSON.parse(favoritos) : [],
  },
  mutations: {
    addFav(state, name) {
      if(state.favoritos.includes(name)){
        const index = state.favoritos.indexOf(name);
        if (index > -1) {
          state.favoritos.splice(index, 1);
        }
      }else{
        state.favoritos.push(name)
      }
      this.commit('saveStorage');
    },
    saveStorage(state){
      window.localStorage.setItem('favoritos', JSON.stringify(state.favoritos));
    }
  },
  actions: {
  },
  modules: {
  }
})
