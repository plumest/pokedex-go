(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83a23726"],{"305e":function(a,e,s){},8418:function(a,e,s){"use strict";var t=s("c04e"),i=s("9bf2"),n=s("5c6c");a.exports=function(a,e,s){var o=t(e);o in a?i.f(a,o,n(0,s)):a[o]=s}},"86fe":function(a,e,s){"use strict";s.r(e);var t=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("Page",{scopedSlots:a._u([a.isLoading?null:{key:"section-header",fn:function(){return[s("div",{staticClass:"container pb-0"},[s("div",{staticClass:"d-flex align-items-center"},[s("h1",{staticClass:"poke-name"},[a._v(a._s(a.pokemon.name))])])])]},proxy:!0},a.isLoading?null:{key:"section-content",fn:function(){return[s("div",{staticClass:"pokemon-container"},[s("div",{staticClass:"image-wrapper"},[a.pokemon.highImg?s("video",{attrs:{width:"320",height:"240",autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[s("source",{attrs:{src:a.pokemon.highImg,type:"video/mp4"}}),s("img",{staticClass:"poke-image",attrs:{src:a.pokemon.image,alt:a.pokemon.name}})]):s("img",{staticClass:"poke-image",attrs:{src:a.pokemon.image,alt:a.pokemon.name}})]),s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"poke-stat"},[s("h1",{staticClass:"content-header"},[a._v(" Pokemon Stats ")]),s("div",{staticClass:"standard-stat"},[s("div",{staticClass:"type-wrapper"},[s("span",[a._v(a._s(a.capitalize(a.pokemon.primaryType))+" ")]),a.pokemon.secondaryType?s("span",[a._v(a._s(a.capitalize(a.pokemon.secondaryType)))]):a._e(),s("p",[a._v("Type")])]),s("div",{staticClass:"weight-wrapper"},[s("span",[a._v(a._s(a.pokemon.weight.toFixed(2))+" kg")]),s("p",[a._v("Weight")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.pokemon.height.toFixed(2))+" m")]),s("p",[a._v("Height")])])]),s("div",{staticClass:"advance-stat"},[s("div",{staticClass:"cp-wrapper"},[s("p",[a._v("Max CP")]),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar",style:{width:a.pokemon.cp/4431*100+"%"},attrs:{role:"progressbar","aria-valuenow":a.pokemon.cp/4431*100,"aria-valuemin":"0","aria-valuemax":"100"}},[s("span",{staticClass:"progress-badge"},[a._v(a._s(a.pokemon.cp))])])])]),s("div",{staticClass:"attack-wrapper"},[s("p",[a._v("ATK")]),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-danger",style:{width:a.pokemon.attack/345*100+"%"},attrs:{role:"progressbar","aria-valuenow":a.pokemon.attack/345*100,"aria-valuemin":"0","aria-valuemax":"100"}},[s("span",{staticClass:"progress-badge"},[a._v(a._s(a.pokemon.attack))])])])]),s("div",{staticClass:"defense-wrapper"},[s("p",[a._v("DEF")]),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-success",style:{width:a.pokemon.defense/396*100+"%"},attrs:{role:"progressbar","aria-valuenow":a.pokemon.defense/396*100,"aria-valuemin":"0","aria-valuemax":"100"}},[s("span",{staticClass:"progress-badge"},[a._v(a._s(a.pokemon.defense))])])])]),s("div",{staticClass:"stamina-wrapper"},[s("p",[a._v("STA")]),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-info",style:{width:a.pokemon.stamina/496*100+"%"},attrs:{role:"progressbar","aria-valuenow":a.pokemon.stamina/496*100,"aria-valuemin":"0","aria-valuemax":"100"}},[s("span",{staticClass:"progress-badge"},[a._v(a._s(a.pokemon.stamina))])])])])])]),a.egg?s("div",{staticClass:"poke-egg"},[s("h1",[a._v("Pokemon Egg")]),s("div",{staticClass:"standard-stat"},[s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.egg.distance))]),s("p",[a._v("Distance")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.egg.minCp))]),s("p",[a._v("Min CP")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.egg.maxCp))]),s("p",[a._v("Max CP")])])])]):a._e(),a.damageToType?s("div",{staticClass:"poke-egg"},[s("h1",{staticClass:"damage-header"},[a._v("Damage to Type")]),s("div",{staticClass:"damage-types"},[s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.normal.toFixed(2)))]),s("p",[a._v("Normal")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.fire.toFixed(2)))]),s("p",[a._v("Fire")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.water.toFixed(2)))]),s("p",[a._v("Water")])])]),s("div",{staticClass:"damage-types"},[s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.electric.toFixed(2)))]),s("p",[a._v("Electric")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.grass.toFixed(2)))]),s("p",[a._v("Grass")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.ice.toFixed(2)))]),s("p",[a._v("Ice")])])]),s("div",{staticClass:"damage-types"},[s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.fighting.toFixed(2)))]),s("p",[a._v("Fighting")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.poison.toFixed(2)))]),s("p",[a._v("Poison")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.ground.toFixed(2)))]),s("p",[a._v("Ground")])])]),s("div",{staticClass:"damage-types"},[s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.flying.toFixed(2)))]),s("p",[a._v("Flying")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.psychic.toFixed(2)))]),s("p",[a._v("Psychic")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.bug.toFixed(2)))]),s("p",[a._v("Bug")])])]),s("div",{staticClass:"damage-types"},[s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.rock.toFixed(2)))]),s("p",[a._v("Rock")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.ghost.toFixed(2)))]),s("p",[a._v("Ghost")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.dragon.toFixed(2)))]),s("p",[a._v("Dragon")])])]),s("div",{staticClass:"damage-types"},[s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.dark.toFixed(2)))]),s("p",[a._v("Dark")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.steel.toFixed(2)))]),s("p",[a._v("Steel")])]),s("div",{staticClass:"height-wrapper"},[s("span",[a._v(a._s(a.damageToType.fairy.toFixed(2)))]),s("p",[a._v("Fairy")])])])]):a._e()])])]},proxy:!0}],null,!0)},[a.isLoading?s("Loading"):a._e()],1)},i=[],n=(s("fb6a"),s("d3b7"),s("96cf"),s("1da1")),o=s("9973"),r=s("3a5e"),p={name:"pokemon",components:{Page:o["a"],Loading:r["a"]},data:function(){return{pokemon:null,isLoading:!0,egg:null,damageToType:null}},created:function(){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n          {\n            pokemon(pokemonId:".concat(a.$route.params.pokemonId,") {\n              attack\n              captureRate\n              cp\n              defense\n              escapeRate\n              generation\n              height\n              hp\n              image\n              legendary\n              name\n              pokemonId\n              primaryType\n              secondaryType\n              stamina\n              weight\n              highImg\n                egg {\n                   distance\n                   maxCp\n                   minCp\n                 }\n                damageType {\n                   bug\n                   dark\n                   dragon\n                   electric\n                   fairy\n                   fighting\n                   fire\n                   flying\n                   ghost\n                   grass\n                   ground\n                   ice\n                   normal\n                   poison\n                   psychic\n                   rock\n                   steel\n                   water\n                }\n            }\n          }")})});case 2:return s=e.sent,e.next=5,s.json();case 5:t=e.sent,a.pokemon=t.data.pokemon,a.egg=t.data.pokemon.egg,a.damageToType=t.data.pokemon.damageType,a.isLoading=!1;case 10:case"end":return e.stop()}}),e)})))()},methods:{capitalize:function(a){return a[0].toUpperCase()+a.slice(1).toLowerCase()}}},c=p,d=(s("e534"),s("2877")),g=Object(d["a"])(c,t,i,!1,null,"6ba26454",null);e["default"]=g.exports},9675:function(a,e,s){},9973:function(a,e,s){"use strict";var t=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",[s("div",{staticClass:"poke-nav"},[s("div",{staticClass:"nav-brand"},[s("router-link",{staticClass:"nav-btn",attrs:{to:"/"}},[s("p",{staticClass:"nav-logo"},[a._v("Pokédex GO")])])],1),s("div",{staticClass:"nav-items"},[s("router-link",{staticClass:"nav-btn",attrs:{to:"/pokemons/ranking"}},[s("p",{staticClass:"nav-item"},[a._v("Tier List")])]),s("router-link",{staticClass:"nav-btn",attrs:{to:"/"}},[s("p",{staticClass:"nav-item"},[a._v("Pokemon")])]),s("router-link",{staticClass:"nav-btn",attrs:{to:"/eggs"}},[s("p",{staticClass:"nav-item"},[a._v("Egg")])])],1)]),s("div",{staticClass:"container"},[s("div",{staticClass:"poke-container"},[s("div",{staticClass:"header-container"},[a._t("section-header")],2),s("div",{staticClass:"content-container"},[a._t("section-content")],2)])])])},i=[],n={},o=n,r=(s("e540"),s("2877")),p=Object(r["a"])(o,t,i,!1,null,"932324b6",null);e["a"]=p.exports},e534:function(a,e,s){"use strict";s("9675")},e540:function(a,e,s){"use strict";s("305e")},fb6a:function(a,e,s){"use strict";var t=s("23e7"),i=s("861d"),n=s("e8b5"),o=s("23cb"),r=s("50c4"),p=s("fc6a"),c=s("8418"),d=s("b622"),g=s("1dde"),v=s("ae40"),l=g("slice"),m=v("slice",{ACCESSORS:!0,0:0,1:2}),_=d("species"),h=[].slice,C=Math.max;t({target:"Array",proto:!0,forced:!l||!m},{slice:function(a,e){var s,t,d,g=p(this),v=r(g.length),l=o(a,v),m=o(void 0===e?v:e,v);if(n(g)&&(s=g.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?i(s)&&(s=s[_],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return h.call(g,l,m);for(t=new(void 0===s?Array:s)(C(m-l,0)),d=0;l<m;l++,d++)l in g&&c(t,d,g[l]);return t.length=d,t}})}}]);
//# sourceMappingURL=chunk-83a23726.a208facf.js.map