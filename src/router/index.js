import Vue from "vue";
import VueRouter from "vue-router";

import Pokemon from "@/views/pokemon/Pokemon";
import PokeList from "@/views/PokeList";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "pokemonList",
        component: PokeList,
    },
    {
        path: "/pokemon/:pokemonID",
        name: "pokemon",
        component: Pokemon
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
