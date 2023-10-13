export interface OctokitResponse {
  status: number;
  url: string;
  headers: Headers;
  data: Data;
}

export interface Data {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface Headers {
  "cache-control": string;
  "content-type": string;
  etag: string;
  "last-modified": string;
  "x-github-media-type": string;
  "x-github-request-id": string;
  "x-ratelimit-limit": string;
  "x-ratelimit-remaining": string;
  "x-ratelimit-reset": string;
  "x-ratelimit-resource": string;
  "x-ratelimit-used": string;
}
