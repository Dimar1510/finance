import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "../types";

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL });

export const api = createApi({
  baseQuery,
  reducerPath: "main",
  tagTypes: ["kpis", "products", "transactions"],
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
    getTransactions: build.query<GetTransactionsResponse[], void>({
      query: () => ({
        url: "transaction/transactions",
        method: "GET",
      }),
      providesTags: ["transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
