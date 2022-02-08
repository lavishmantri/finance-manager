import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // wait 5 min to refetch in development
      staleTime: process.env.NODE_ENV === 'development' ? 5 * 60 * 1000 : 0,
      // don't refetch on window focus in development
      refetchOnWindowFocus: process.env.NODE_ENV !== 'development',
      // don't retry requests in development
      retry: process.env.NODE_ENV !== 'development',
    },
  },
});
