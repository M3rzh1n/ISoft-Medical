export const environment = {
  production: true,
  auth0: {
    domain: 'dev-isoft.us.auth0.com',
    clientId: 'lERzBtf7cxB37irvf5ON8ZPjyXXnYYyR',
    authorizationParams: {
      redirect_uri: 'https://m3rzh1n.github.io/ISoft-Medical',
      connection: "sms",
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: '',
  },
};

