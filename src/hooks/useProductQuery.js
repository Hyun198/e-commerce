import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = (keyword) => {
    return api.get(`/products?q=${keyword}`)
}

export const useProductQuery = (keyword) => {
    return useQuery({
        queryKey: ["products", keyword],
        queryFn: () => fetchProducts(keyword),
        select: data => data.data,
        staleTime: 1000 * 60 * 10, // 10 minutes
    })
}