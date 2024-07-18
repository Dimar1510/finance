import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse } from "../types";

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL });

export const api = createApi({
  baseQuery,
  reducerPath: "main",
  tagTypes: ["kpis", "products"],
  endpoints: (build) => ({
    getKpis: build.query<GetKpisResponse[], void>({
      query: () => ({
        url: "kpi/kpis",
        method: "GET",
      }),
      providesTags: ["kpis"],
    }),
    getProducts: build.query<GetProductsResponse[], void>({
      query: () => ({
        url: "product/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery } = api;
