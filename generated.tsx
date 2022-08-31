import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AsaData = {
  __typename?: "AsaData";
  URL?: Maybe<Scalars["String"]>;
  assetId: Scalars["String"];
  available: Scalars["Boolean"];
  category?: Maybe<Scalars["String"]>;
  circSupply?: Maybe<Scalars["String"]>;
  creator?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  discord?: Maybe<Scalars["String"]>;
  fractionDecimals?: Maybe<Scalars["Int"]>;
  github?: Maybe<Scalars["String"]>;
  logo?: Maybe<Scalars["String"]>;
  medium?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  reddit?: Maybe<Scalars["String"]>;
  reputation_Algoexplorer: Scalars["String"];
  reputation_Pera: Scalars["String"];
  score_Algoexplorer: Scalars["Int"];
  telegram?: Maybe<Scalars["String"]>;
  totalSupply?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  unitname1?: Maybe<Scalars["String"]>;
  unitname2?: Maybe<Scalars["String"]>;
  usdValue?: Maybe<Scalars["String"]>;
};

export type AsaList = {
  __typename?: "AsaList";
  result: Array<AsaData>;
};

export type AsaResponse = {
  __typename?: "AsaResponse";
  result: Array<AsaData>;
};

export type GithubAnalyticsPerRepo = {
  __typename?: "GithubAnalyticsPerRepo";
  commits: Scalars["Int"];
  contributors: Scalars["Int"];
  forks: Scalars["Int"];
  issues: Scalars["Int"];
  pullRequests: Scalars["Int"];
  repoName: Scalars["String"];
  stars: Scalars["Int"];
  watches: Scalars["Int"];
};

export type GithubAnalyticsPerTime = {
  __typename?: "GithubAnalyticsPerTime";
  commits: Scalars["Int"];
  forks: Scalars["Int"];
  issues: Scalars["Int"];
  lastPushDate?: Maybe<Scalars["DateTime"]>;
  lastPushDateDay?: Maybe<Scalars["Int"]>;
  lastPushDateWeekday?: Maybe<Scalars["String"]>;
  pullRequests: Scalars["Int"];
  stars: Scalars["Int"];
  watches: Scalars["Int"];
};

export type GithubOverview = {
  __typename?: "GithubOverview";
  commits: Scalars["Int"];
  contributors: Scalars["Int"];
  forks: Scalars["Int"];
  issues: Scalars["Int"];
  languages: Array<Maybe<Scalars["String"]>>;
  pullRequests: Scalars["Int"];
  stars: Scalars["Int"];
  watches: Scalars["Int"];
};

export type PerRepo = {
  __typename?: "PerRepo";
  repo: Array<GithubAnalyticsPerRepo>;
};

export type PerTime = {
  __typename?: "PerTime";
  repo: Array<GithubAnalyticsPerTime>;
};

export type Query = {
  __typename?: "Query";
  asaData: AsaResponse;
  asalist: AsaList;
  githubAnalyticsPerepo: PerRepo;
  githubAnalyticsPertime: PerTime;
  githubOverview: GithubOverview;
  redditAnalytics: Array<RedditPostSchema>;
  twitterAnalytics: Response;
  twitterOverview: TwitterOverview;
};

export type QueryAsaDataArgs = {
  asaID: Scalars["String"];
};

export type QueryGithubAnalyticsPerepoArgs = {
  asaID: Scalars["String"];
  sortBy: Scalars["String"];
};

export type QueryGithubAnalyticsPertimeArgs = {
  asaID: Scalars["String"];
  day?: Scalars["Boolean"];
  endDate?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["String"]>;
  weekDay?: Scalars["Boolean"];
};

export type QueryGithubOverviewArgs = {
  asaID: Scalars["String"];
};

export type QueryRedditAnalyticsArgs = {
  asaID: Scalars["String"];
  endDate?: Scalars["String"];
  startDate?: Scalars["String"];
};

export type QueryTwitterAnalyticsArgs = {
  asaID: Scalars["String"];
  endDate?: InputMaybe<Scalars["String"]>;
  hour?: Scalars["Boolean"];
  startDate?: InputMaybe<Scalars["String"]>;
  weekday?: Scalars["Boolean"];
};

export type QueryTwitterOverviewArgs = {
  asaID: Scalars["String"];
};

export type RedditCommentSchema = {
  __typename?: "RedditCommentSchema";
  commentId: Scalars["String"];
  commentScore: Scalars["Int"];
  commentSentimentScore: Scalars["Float"];
  postId: Scalars["String"];
};

export type RedditPostSchema = {
  __typename?: "RedditPostSchema";
  asaID: Scalars["String"];
  more: Array<RedditCommentSchema>;
  numOfComments: Scalars["Int"];
  postId: Scalars["String"];
  postText?: Maybe<Scalars["String"]>;
  postTitle: Scalars["String"];
  score: Scalars["Int"];
  sentimentScore: Scalars["Float"];
};

export type Response = {
  __typename?: "Response";
  asaID?: Maybe<Scalars["String"]>;
  results: Array<TwitterAnalytics>;
};

export type TwitterAnalytics = {
  __typename?: "TwitterAnalytics";
  hour?: Maybe<Scalars["Int"]>;
  likes: Scalars["Int"];
  postedAt?: Maybe<Scalars["DateTime"]>;
  retweets: Scalars["Int"];
  sentiment: Scalars["Float"];
  weekday?: Maybe<Scalars["String"]>;
};

export type TwitterOverview = {
  __typename?: "TwitterOverview";
  asaID: Scalars["String"];
  likeTotal: Scalars["Int"];
  retweetTotal: Scalars["Int"];
  sentimentTotal: Scalars["Float"];
  tweetTotal: Scalars["Int"];
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
  __typename?: "Query";
  asalist: {
    __typename?: "AsaList";
    result: Array<{
      __typename?: "AsaData";
      name: string;
      assetId: string;
      available: boolean;
      logo?: string | null;
      unitname1?: string | null;
    }>;
  };
};

export const Document = gql`
  {
    asalist {
      result {
        name
        assetId
        available
        logo
        unitname1
      }
    }
  }
`;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Unnamed_1_Query,
    Unnamed_1_QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Unnamed_1_Query, Unnamed_1_QueryVariables>(
    Document,
    options
  );
}
export function useLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Unnamed_1_Query,
    Unnamed_1_QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Unnamed_1_Query, Unnamed_1_QueryVariables>(
    Document,
    options
  );
}
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<
  Unnamed_1_Query,
  Unnamed_1_QueryVariables
>;
