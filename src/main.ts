import Vue from 'vue';
import './plugins/composition-api';

import App from './App.vue';

new Vue({
    render: h => h(App),
}).$mount('#app');