/*
public wallets API endpoints per environment
api.circle.com
api-staging.circle.com
api-sandbox.circle.com
api-smokebox.circle.com
*/
const apiHostname: string =
  process.env.WALLETS_API == null ? process.env.WALLETS_API! : ''

export { apiHostname }
