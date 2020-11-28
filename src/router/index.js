import Vue from "vue";
import VueRouter from "vue-router";

import Pokemon from "@/views/pokemon/Pokemon";
import PokeList from "@/views/pokemon/PokeList";
import PageNotFound from "@/components/PageNotFound"
import Report from "@/views/pokemon/Report";

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      redirect: "pokemons",
    },
    {
        path: "/pokemons",
        name: "pokemonList",
        component: PokeList,
    },
    {
        path: "/pokemon/:pokemonId",
        name: "pokemon",
        component: Pokemon
    },
    {
      path: "/report",
      component: Report,
    }
    ,
    {
      path: '*',
      component: PageNotFound,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
