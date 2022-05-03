import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from "@auth0/auth0-vue";
import './index.css'

const app = createApp(App)


app
    .use(
        createAuth0({
          domain: process.env.VUE_APP_AUTH0_DOMAIN,
          client_id: process.env.VUE_APP_AUTH0_CLIENT_ID,
          redirect_uri: window.location.origin,
        })
      )
    .mount('#app')
