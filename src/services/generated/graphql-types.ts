import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GUID: any;
  JSON: any;
  JSONObject: any;
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  readFile?: Maybe<Status>;
  uploadFile: File;
};


export type MutationReadFileArgs = {
  filePath: Scalars['String'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type Query = {
  __typename?: 'Query';
  getTransactionList?: Maybe<Array<Maybe<Transaction>>>;
};

export type Status = {
  __typename?: 'Status';
  status?: Maybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mode?: Maybe<TransactionMode>;
  type?: Maybe<TransactionType>;
};

export enum TransactionMode {
  Cash = 'CASH',
  CreditCard = 'CREDIT_CARD',
  DebitCard = 'DEBIT_CARD',
  EWallet = 'E_WALLET',
  Neft = 'NEFT',
  PayLater = 'PAY_LATER',
  Rtgs = 'RTGS',
  Upi = 'UPI'
}

export enum TransactionType {
  Credit = 'CREDIT',
  Debit = 'DEBIT'
}

export type GetTransactionListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransactionListQuery = { __typename?: 'Query', getTransactionList?: Array<{ __typename?: 'Transaction', id: string, description?: string | null } | null> | null };


export const GetTransactionListDocument = gql`
    query GetTransactionList {
  getTransactionList {
    id
    description
  }
}
    `;

/**
 * __useGetTransactionListQuery__
 *
 * To run a query within a React component, call `useGetTransactionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransactionListQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionListQuery, GetTransactionListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionListQuery, GetTransactionListQueryVariables>(GetTransactionListDocument, options);
      }
export function useGetTransactionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionListQuery, GetTransactionListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionListQuery, GetTransactionListQueryVariables>(GetTransactionListDocument, options);
        }
export type GetTransactionListQueryHookResult = ReturnType<typeof useGetTransactionListQuery>;
export type GetTransactionListLazyQueryHookResult = ReturnType<typeof useGetTransactionListLazyQuery>;
export type GetTransactionListQueryResult = Apollo.QueryResult<GetTransactionListQuery, GetTransactionListQueryVariables>;