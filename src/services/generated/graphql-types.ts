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

export type Loan = {
  __typename?: 'Loan';
  basis: LoanBasis;
  date?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  guarantor?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interestRate: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  principal: Scalars['Int'];
};

export type LoanAccount = {
  __typename?: 'LoanAccount';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum LoanBasis {
  BASIS_1 = 'BASIS_1',
  BASIS_2 = 'BASIS_2'
}

export type Mutation = {
  __typename?: 'Mutation';
  addLoanAccount: LoanAccount;
  createLoan: Loan;
  readFile?: Maybe<Status>;
  uploadFile: File;
};


export type MutationaddLoanAccountArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationcreateLoanArgs = {
  basis: LoanBasis;
  date?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  guarantor?: InputMaybe<Scalars['String']>;
  interestRate: Scalars['Int'];
  loanAccount: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  principal: Scalars['Int'];
};


export type MutationreadFileArgs = {
  filePath: Scalars['String'];
};


export type MutationuploadFileArgs = {
  file: Scalars['Upload'];
};

export type Query = {
  __typename?: 'Query';
  getLoanAccounts?: Maybe<Array<Maybe<LoanAccount>>>;
  getLoansList?: Maybe<Array<Maybe<Loan>>>;
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
  mode: TransactionMode;
  type: TransactionType;
};

export enum TransactionMode {
  CASH = 'CASH',
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  E_WALLET = 'E_WALLET',
  NEFT = 'NEFT',
  PAY_LATER = 'PAY_LATER',
  RTGS = 'RTGS',
  UPI = 'UPI'
}

export enum TransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT'
}

export type GetLoanAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoanAccountsQuery = { __typename?: 'Query', getLoanAccounts?: Array<{ __typename?: 'LoanAccount', id: string, name: string, description?: string | null } | null> | null };

export type AddLoanAccountMutationVariables = Exact<{
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type AddLoanAccountMutation = { __typename?: 'Mutation', addLoanAccount: { __typename?: 'LoanAccount', id: string, name: string, description?: string | null } };

export type GetLoansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoansQuery = { __typename?: 'Query', getLoansList?: Array<{ __typename?: 'Loan', id: string, interestRate: number } | null> | null };

export type CreateLoanMutationVariables = Exact<{
  interestRate: Scalars['Int'];
  principal: Scalars['Int'];
  loanAccount: Scalars['String'];
  loanBasis: LoanBasis;
  duration?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  guarantor?: InputMaybe<Scalars['String']>;
}>;


export type CreateLoanMutation = { __typename?: 'Mutation', createLoan: { __typename?: 'Loan', id: string } };

export type GetTransactionListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransactionListQuery = { __typename?: 'Query', getTransactionList?: Array<{ __typename?: 'Transaction', id: string, description?: string | null } | null> | null };


export const GetLoanAccountsDocument = gql`
    query GetLoanAccounts {
  getLoanAccounts {
    id
    name
    description
  }
}
    `;

/**
 * __useGetLoanAccountsQuery__
 *
 * To run a query within a React component, call `useGetLoanAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoanAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoanAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoanAccountsQuery(baseOptions?: Apollo.QueryHookOptions<GetLoanAccountsQuery, GetLoanAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoanAccountsQuery, GetLoanAccountsQueryVariables>(GetLoanAccountsDocument, options);
      }
export function useGetLoanAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoanAccountsQuery, GetLoanAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoanAccountsQuery, GetLoanAccountsQueryVariables>(GetLoanAccountsDocument, options);
        }
export type GetLoanAccountsQueryHookResult = ReturnType<typeof useGetLoanAccountsQuery>;
export type GetLoanAccountsLazyQueryHookResult = ReturnType<typeof useGetLoanAccountsLazyQuery>;
export type GetLoanAccountsQueryResult = Apollo.QueryResult<GetLoanAccountsQuery, GetLoanAccountsQueryVariables>;
export const AddLoanAccountDocument = gql`
    mutation AddLoanAccount($name: String!, $description: String) {
  addLoanAccount(name: $name, description: $description) {
    id
    name
    description
  }
}
    `;
export type AddLoanAccountMutationFn = Apollo.MutationFunction<AddLoanAccountMutation, AddLoanAccountMutationVariables>;

/**
 * __useAddLoanAccountMutation__
 *
 * To run a mutation, you first call `useAddLoanAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLoanAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLoanAccountMutation, { data, loading, error }] = useAddLoanAccountMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddLoanAccountMutation(baseOptions?: Apollo.MutationHookOptions<AddLoanAccountMutation, AddLoanAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLoanAccountMutation, AddLoanAccountMutationVariables>(AddLoanAccountDocument, options);
      }
export type AddLoanAccountMutationHookResult = ReturnType<typeof useAddLoanAccountMutation>;
export type AddLoanAccountMutationResult = Apollo.MutationResult<AddLoanAccountMutation>;
export type AddLoanAccountMutationOptions = Apollo.BaseMutationOptions<AddLoanAccountMutation, AddLoanAccountMutationVariables>;
export const GetLoansDocument = gql`
    query GetLoans {
  getLoansList {
    id
    interestRate
  }
}
    `;

/**
 * __useGetLoansQuery__
 *
 * To run a query within a React component, call `useGetLoansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoansQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLoansQuery(baseOptions?: Apollo.QueryHookOptions<GetLoansQuery, GetLoansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoansQuery, GetLoansQueryVariables>(GetLoansDocument, options);
      }
export function useGetLoansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoansQuery, GetLoansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoansQuery, GetLoansQueryVariables>(GetLoansDocument, options);
        }
export type GetLoansQueryHookResult = ReturnType<typeof useGetLoansQuery>;
export type GetLoansLazyQueryHookResult = ReturnType<typeof useGetLoansLazyQuery>;
export type GetLoansQueryResult = Apollo.QueryResult<GetLoansQuery, GetLoansQueryVariables>;
export const CreateLoanDocument = gql`
    mutation CreateLoan($interestRate: Int!, $principal: Int!, $loanAccount: String!, $loanBasis: LoanBasis!, $duration: String, $date: String, $notes: String, $guarantor: String) {
  createLoan(
    interestRate: $interestRate
    principal: $principal
    loanAccount: $loanAccount
    basis: $loanBasis
    duration: $duration
    date: $date
    notes: $notes
    guarantor: $guarantor
  ) {
    id
  }
}
    `;
export type CreateLoanMutationFn = Apollo.MutationFunction<CreateLoanMutation, CreateLoanMutationVariables>;

/**
 * __useCreateLoanMutation__
 *
 * To run a mutation, you first call `useCreateLoanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLoanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLoanMutation, { data, loading, error }] = useCreateLoanMutation({
 *   variables: {
 *      interestRate: // value for 'interestRate'
 *      principal: // value for 'principal'
 *      loanAccount: // value for 'loanAccount'
 *      loanBasis: // value for 'loanBasis'
 *      duration: // value for 'duration'
 *      date: // value for 'date'
 *      notes: // value for 'notes'
 *      guarantor: // value for 'guarantor'
 *   },
 * });
 */
export function useCreateLoanMutation(baseOptions?: Apollo.MutationHookOptions<CreateLoanMutation, CreateLoanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLoanMutation, CreateLoanMutationVariables>(CreateLoanDocument, options);
      }
export type CreateLoanMutationHookResult = ReturnType<typeof useCreateLoanMutation>;
export type CreateLoanMutationResult = Apollo.MutationResult<CreateLoanMutation>;
export type CreateLoanMutationOptions = Apollo.BaseMutationOptions<CreateLoanMutation, CreateLoanMutationVariables>;
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