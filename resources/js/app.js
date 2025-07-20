import './bootstrap';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

import { createApp } from 'vue';
import App from './components/App.vue';

createApp(App).use(vuetify).mount('#app');
