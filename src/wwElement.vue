<template>
  <div class="button" @click="loginWithGoogle">Login With Google</div>
</template>

<script>
import auth0 from "auth0-js";

export default {
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    textStyle() {
      return {
        color: this.content.textColor,
      };
    },
  },
  methods: {
    async loginWithGoogle() {
      const { auth0_domain, auth0_clientId, auth0_redirectUri, auth0_audienceUrl } = this.content
      const webAuthClient = new auth0.WebAuth({
        // required to force Auth0 to return a JWT instead of it's proprietary access token format
        audience: auth0_audienceUrl,
        domain: auth0_domain,
        clientID: auth0_clientId,
        responseType: "token",
        leeway: 60, // allow for clock skew between devices and server
        redirectUri: auth0_redirectUri,
        scope: "openid profile email",
      });

      return webAuthClient.authorize({
      connection: "google-oauth2",
      connection_scope: "",
    });
    }
  }
};
</script>