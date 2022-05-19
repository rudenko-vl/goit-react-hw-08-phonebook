import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    tagTypes: ['contacts'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        refetchOnMountOrArgChange: true,
        prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }}),
    endpoints: (build) => ({
        getContacts: build.query({
            query: () => "/contacts",
            providesTags: (result) => result
              ? [
                  ...result.map(({ id }) => ({ type: 'contacts', id })),
                  { type: 'contacts', id: 'LIST' },
                ]
              : [{ type: 'contacts', id: 'LIST' }],
        }),
        newContacts: build.mutation({
            query: (body) => ({
                url: 'contacts',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'contacts', id: 'LIST'}]
        }),
        deleteContact: build.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'contacts', id: 'LIST'}]
        }),
        updateContact: build.mutation({
      query: ({ id, ...contact }) => ({
        url: `/contacts/${id}`,
        params: contact,
        method: "PATCH",
        body: contact,
      }),
      invalidatesTags: [{type: 'contacts', id: 'LIST'}],
    }),
    })
});

export const { useGetContactsQuery, useDeleteContactMutation, useNewContactsMutation, useUpdateContactMutation} = contactsApi;