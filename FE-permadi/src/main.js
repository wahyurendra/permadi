import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/styles.scss';
import '@/assets/tailwind.css';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import vue3dLoader from 'vue-3d-loader';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';


const app = createApp(App);

app.component('InputText', InputText);
app.component('Password', Password);
app.component('Checkbox', Checkbox);
app.component('Button', Button);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);
app.use(vue3dLoader);

app.mount('#app');

