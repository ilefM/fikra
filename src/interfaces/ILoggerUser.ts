export interface ILoggerUser {
  tokens: Tokens;
  username: string;
  userId: string;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
}
