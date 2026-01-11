import { createProxyHandler } from "decap-cms-github-oauth-proxy";

export const handler = createProxyHandler({
  clientId: process.env.OAUTH_CLIENT_ID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
});
