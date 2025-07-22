import './bootstrap';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
});

import { createApp } from 'vue';
import App from './components/App.vue';
import Register from './components/Register.vue';

createApp(App).use(vuetify).mount('#app');
createApp(Register).use(vuetify).mount('#register');


export default vuetify;
