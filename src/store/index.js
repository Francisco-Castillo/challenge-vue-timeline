import Vue from 'vue'
import Vuex from 'vuex'
import ReservaModule from "./reservamodule.js"
import TimelineModule from "./timelinemodule.js"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        ReservaModule: ReservaModule,
        TimelineModule: TimelineModule
    }
});

export default store;
