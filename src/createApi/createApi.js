import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { GroupState } from '../types/interface.ts'
import { API } from '../constains/constains'

export const getAllGroups = createApi({
  reducerPath: 'fetchGroups',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getGroupsVk: builder.query({
      query: () => '',
    }),
  }),
})

export const { useGetGroupsVkQuery } = getAllGroups
