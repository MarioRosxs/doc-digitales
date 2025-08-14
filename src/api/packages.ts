import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Package = {
  name: string;
  id: string;
  title: string;
  price: string;
  description: string;
}

export const packages = createApi({
  reducerPath: 'packages',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://689cf400ce755fe6978780bb.mockapi.io/' }),
  endpoints: (builder) => ({
    getPackages: builder.query<Package[], void>({
      query: () => 'packages',
    }),
  }),
});

export const { useGetPackagesQuery } = packages;
