export default {
  editor: {
    "type": "Button",
    "label": {
      en: "GoogleLogin",
    },
    "options": {
        // Translated text to be displayed inside button
        "text": {
            "en": "Google Login"
        },
        "action": "loginWithGoogle" // name of one of your component methods
    },
  },
  "properties": {
    button: {
      hidden: true,
      defaultValue: { isWwObject: true, type: 'ww-button', content: { text: { en: 'Google Login' } } },
    },
    auth0_domain: {
      label: {
        en: "Auth0 Domain"
      },
      type: "Text",
      bindable: true,
    },
    auth0_clientId: {
      label: {
        en: "Auth0 ClientId"
      },
      type: "Text",
      bindable: true,
    },
    auth0_redirectUri: {
      label: {
        en: "Auth0 Redirect URI"
      },
      type: "Text",
      bindable: true,
    },
    auth0_audienceUrl: {
      label: {
        en: "Auth0 Audience URL"
      },
      type: "Text",
      bindable: true,
    },
  }
};
