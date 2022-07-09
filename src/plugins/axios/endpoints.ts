const authEndpoints = {
  signIn: "/auth/login",
};

const fbEndpoints = {
  users: "/users",
  accounts: "/fb-accounts",
  adAccounts: "/fb-cabs",
  campaigns: "/fb-campaigns",
  adsets: "/fb-adsets",
  ads: "/fb-ads",
};

const ttEndpoints = {
  accounts: "/tiktok/accounts",
  adAccounts: "/tiktok/adaccounts",
  campaigns: "/tiktok/campaigns",
  adsets: "/tiktok/adsets",
  ads: "/tiktok/creatives",
};

const proxyEndpoints = {
  proxies: "/proxies",
};

export { authEndpoints, fbEndpoints, proxyEndpoints, ttEndpoints };
