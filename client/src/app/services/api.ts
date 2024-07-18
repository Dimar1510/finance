import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "../types";

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL });

export const api = createApi({
  baseQuery,
  reducerPath: "main",
  tagTypes: ["kpis"],
  endpoints: (build) => ({
    getKpis: build.query<GetKpisResponse[], void>({
      query: () => ({
        url: "kpi/kpis",
        method: "GET",
      }),
      providesTags: ["kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
