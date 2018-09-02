import axios from 'axios';

import Helper from '../Helper'

const Products = {
    All: (page=1, limit=2) => {
        const path = Helper.base_url(`api/products?page=${page}&perPage=${limit}`);
        return axios.get(path)
    },
    GetBySlug: (slug) => {
        const path = Helper.base_url(`api/products/${slug}`);
        return axios.get(path)
    }
}

export default Products;