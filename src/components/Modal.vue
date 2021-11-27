<template>
  
    <div id="myModal" class="modalPok">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="header">
                <a class="close" @click="$parent.verModal = false"><i class="fa fa-times-circle" aria-hidden="true"></i></a>
                <img :src="imageUrl + pokemon.id + '.png'" alt="" class="fotoPoke">
            </div>
            <div class="details">
                
                <ul>
                    <li><strong>Name:</strong> {{pokemon.name}}</li>
                    <li><strong>Weight:</strong> {{pokemon.weight}}</li>
                    <li><strong>Height:</strong> {{pokemon.height}}</li>
                    <li><strong>Types:</strong>&nbsp;
                        <span v-for="(tipo, index) in pokemon.types" :key="'value'+index">
                            {{tipo.type.name}}
                            <template v-if="index < pokemon.types.length - 1">,&nbsp;</template>
                        </span>
                    </li>
                </ul>

            </div>

            
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Modal',
  props: ['pokemonUrl'],
  data: () => {
    return {
      pokemon:[],
    };
  },
  methods: {
    fetchData() {
    let req = new Request(this.pokemonUrl);
    fetch(req)
        .then((resp) => {
        if(resp.status === 200)
            return resp.json();
        })
        .then((data) => {
            this.pokemon = data;
            this.show = true;
        })
        .catch((error) => {
            console.log(error);
        })
    },
    
  },
  created() {
    
  },
  mounted() {       
    console.log('Pokemon:',this.pokemonUrl)  
    if(this.pokemonUrl){
        this.fetchData();
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    /* The Modal (background) */
    .modalPok {
        display: block; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content/Box */
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        
        border: 1px solid #888;
        width: 40%; /* Could be more or less, depending on screen size */
        @media only screen and (max-width: 600px) {
            width: 80%;
        }
        .details{
            padding: 20px;
        }
    }

    .header{
        background: url('../assets/fondo-poke.jpg') no-repeat;
        background-size: cover;
        height: 150px;
        position: relative;
        vertical-align: middle;
        .fotoPoke{
            width: 140px;
            margin-top: 10px;
            height: auto;
        }
    }

    .details{
        ul{
            margin: 0;
            padding: 0;
            li{
                list-style: none;
                text-align: left;
                font-size: 18px;
                border-bottom: 1px solid #E8E8E8;
                padding: 10px;
            }
        }
    }

    /* The Close Button */
    .close {
        color: #fff;
        position:absolute;
        font-size: 28px;
        font-weight: bold;
        border-radius: 20px;
        right: 10px;
        top: 5px;
    }

    .close:hover,
    .close:focus {
        color: #fefefe;
        text-decoration: none;
        cursor: pointer;
    }

</style>
