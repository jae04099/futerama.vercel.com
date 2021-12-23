import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import API_PATH from 'FutConst'

export const useApi = (path: string) => {
    return useSWR(path)
}