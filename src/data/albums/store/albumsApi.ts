import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Album, Photo } from "../model/types";

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getAlbums: builder.query<Array<Album>, void>({
            query: () => 'albums'
        }),
        getPhotos: builder.query<Array<Photo>, number>({
            query: (id) => `albums/${id}/photos`
        })
    })
});

export const {useGetAlbumsQuery, useGetPhotosQuery} = albumsApi;