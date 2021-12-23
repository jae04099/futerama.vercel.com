import axios from 'axios';

export const fetcher = (url: string) => {
    return axios.get(url).then((res) => {
        return res
    }).catch((err) => {
        console.log(err)
    })
}