export const environment = {
  production: true,
  auth0: {
    domain: 'dev-isoft.us.auth0.com',
    clientId: 'lERzBtf7cxB37irvf5ON8ZPjyXXnYYyR',
    authorizationParams: {
      redirect_uri: 'https://github.com/M3rzh1n/Angular_Typescript_App1/callback',
      connection: "sms",
      prompt: "none",
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: '',
  },
};

