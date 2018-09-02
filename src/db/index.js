import axios from 'axios';

const base_url = 'http://localhost:5000/'

const Products = {
    All: (page=1, limit=2) => {
        const path = `${base_url}api/products?page=${page}&perPage=${limit}`;
        return axios.get(path)
    },
    GetBySlug: (slug) => {
        const path = `${base_url}api/products/${slug}`;
        return axios.get(path)
    }
}

export default Products;