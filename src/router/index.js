import Vue from "vue";
import VueRouter from "vue-router";

const Pokemon = () => import("@/views/pokemon/Pokemon");
const PokeList = () => import("@/views/pokemon/PokeList");
const PageNotFound = () => import("@/components/PageNotFound");
const Report = () => import("@/views/pokemon/Report");
const Eggs = () => import("@/views/egg/Eggs")

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
      path: "/eggs",
      name: "eggs",
      component: Eggs,
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
