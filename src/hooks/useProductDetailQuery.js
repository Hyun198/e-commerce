import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchProductDetail = (id) => {
    return api.get(`/products/${id}`)
}

export const useProductDetailQuery = (id) => {
    return useQuery({
        queryKey: ['productDetail', id],
        queryFn: () => fetchProductDetail(id),
        select: data => data.data,
        staleTime: 1000 * 60 * 10,
    })
}