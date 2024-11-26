import {fetchBaseQuery} from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'localhost:3500' }),
    tags: ['POSTS'],
    endpoints: () => ({}),
})
