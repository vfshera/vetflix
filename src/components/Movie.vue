<template>
  <div class="movie" v-if="!!movie" :style="{ backgroundImage: `url(${movie.big_image})` }">


    <div class="trailer" :class="{ 'novideo': !videoId }">
      <iframe v-if="videoId" width="800" height="480" :src="videoURL" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    <h1 class="movie-title">{{ movie.title }}</h1>

    <p class="about">
      {{ movie.description }}
    </p>
    <div class="info">
      <div class="rating">
        <p>Rating</p>
        <p style="text-align: center">{{ movie.rating }}</p>
      </div>
      <!-- <div id="release">
        <p>Release</p>
        <!-- <p>{{ movie.release_date || movie.first_air_date }}</p>  
      </div> -->
      <div class="genre">
        <p>Genre</p>
        <p style="display: inline" v-for="genre in movie.genre" :key="genre">{{ genre + " " }} </p>
      </div>
      <!-- <div id="adult" v-if="movie">
        <p>18+</p>
      </div> -->
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import mov, { type Movies } from '../data/movies';
import { useRoute } from 'vue-router';


const route = useRoute()

const videoId = ref('');
const videoLink = 'https://www.youtube.com/embed/';
const movie = ref<Movies>();

const videoURL = computed(() => {
  return videoLink + videoId.value + "?&autoplay=1";
});

onMounted(() => {

  movie.value = mov.moviesAndSeries.find((movie) => movie.imdbid == route.params.id);
});
</script>

<style scoped>
.novideo {
  height: 300px
}

.trailer {
  display: flex;
  align-items: center;
  justify-content: center;

}

.logo {
  margin: 0 auto;
  padding-left: 20px;
  max-width: 85px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.rating {
  font-size: 1.7vw;
  color: white;
  margin-right: 15px;
  background-color: #111111BD;
  width: 10vw;
  text-align: center;
  height: 5vw;
  padding-top: .9vw;
  border: none;
  border-radius: 15px;
}


.release {
  font-size: 1.7vw;
  color: white;
  margin-right: 15px;
  background-color: #111111BD;
  width: 12vw;
  text-align: center;
  height: 5vw;
  padding-top: .9vw;
  border: none;
  border-radius: 15px;
}

.genre {
  font-size: 1.7vw;
  color: white;
  margin-right: 15px;
  background-color: #111111BD;
  min-width: 12vw;
  text-align: center;
  height: 5vw;
  padding-top: .9vw;
  border: none;
  border-radius: 15px;
  padding-right: 15px;
  padding-left: 15px;
}

.adult {
  font-size: 4.5vw;
  color: #E50914;
  background-color: #111111BD;
  width: 10vw;
  text-align: center;
  height: 5vw;
  padding: .4vw 0;
  border: none;
  border-radius: 15px;
}


.info {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

iframe {
  margin-top: 50px;

}

.movie-title {
  text-align: center;
  font-size: 5vw;
  color: white;
  margin-left: 30px;
  padding-top: 60px;
  filter: drop-shadow(0 0 2px #a84032);
}

.movie {
  height: 1000px;
  object-fit: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
}


.about {
  text-align: center;
  color: white;
  width: 800px;
  margin: auto;
  padding: 20px;
  margin-top: 30px;
  background-color: rgba(0, 0, 0, .5);
  border: none;
  border-radius: 15px;
}


@media (max-width: 720px) {


  iframe {
    width: 600px;
    height: 300px;
  }

  .movie {
    height: 100%;
    object-fit: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }


  .about {
    text-align: center;
    color: white;
    width: 80%;
    margin: auto;
    padding: 20px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, .5);
    border: none;
    border-radius: 15px;
  }

  .movie-title {
    text-align: center;
    font-size: 8.7vw;
    color: white;
    margin-left: 30px;
    margin-right: 30px;
    padding-top: 10px !important;
    filter: drop-shadow(0 0 2px #a84032);
  }

  .logo {
    margin: 0 auto;
    padding-left: 20px;
    max-width: 85px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .production {
    display: flex;
    height: 180px;
    justify-content: center;
    margin-top: 160px;
    padding: 0 100px;
    background-image: linear-gradient(#11111126, #111111FF);
  }



  .rating {
    font-size: 3vw;
    color: white;
    margin-right: 15px;
    background-color: #111111BD;
    width: 16vw;
    text-align: center;
    height: 7.2vw;
    padding-top: .8vw;
    border: none;
    border-radius: 5px;
  }

  .release {
    font-size: 3vw;
    color: white;
    margin-right: 15px;
    background-color: #111111BD;
    width: 20vw;
    text-align: center;
    height: 7.2vw;
    padding-top: .8vw;
    border: none;
    border-radius: 5px;
  }

  .genre {
    font-size: 2.8vw;
    color: white;
    margin-right: 15px;
    background-color: #111111BD;
    min-width: 12vw;
    text-align: center;
    height: 7.2vw;
    padding-top: .7vw;
    border: none;
    border-radius: 5px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .adult {
    font-size: 5.5vw;
    color: #E50914;
    background-color: #111111BD;
    width: 10vw;
    text-align: center;
    height: 72vw;
    padding: .4vw 0;
    border: none;
    border-radius: 5px;
  }


  .info {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
</style>
