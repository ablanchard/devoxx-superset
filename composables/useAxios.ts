import axios from 'axios'
export const useAxios = () => {
        const conf = useRuntimeConfig();
        const baseURL = conf.public.axios.baseURL
        return axios.create({
            baseURL: baseURL,
            // headers: {
            //   Authorization: `Bearer ${storeUser.token}`
            // }
        })
    }
