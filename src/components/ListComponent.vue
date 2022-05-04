<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h1 class="fw-bold">List of products</h1>
            <hr>
            <div class="table-responsive">
                <table class="table table-bordered my-3">
                    <thead>
                        <tr class="text-center">
                            <th>Name</th>
                            <th>Detail</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product._id">
                            <td>{{ product.name }}</td>
                            <td>{{ product.detail }}</td>
                            <td>{{ product.price }}</td>
                            <td class="text-center">
                                <router-link :to="{ name: 'edit', params: { id: product._id } }" class="btn btn-warning text-light btn-100 me-2">
                                    Edit
                                </router-link>
                                <button @click.prevent="deleteProduct(product._id)" class="btn btn-outline-danger btn-100">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [],
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';

        axios.get(apiURL).then((res) => {
            this.products = res.data;
        }).catch((error) => {
            console.log(error);
        });
    },
    methods: {
        deleteProduct(id) {
            let apiURL = `http://localhost:4000/api/delete-product/${id}`;
            let indexOfArrayItem = this.products.findIndex(i => i._id === id);
            
            if(window.confirm("Are you sure you want to delete")) {
                axios.delete(apiURL).then(() => {
                    this.products.splice(indexOfArrayItem, 1);
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
}
</script>
<style>
    .btn-100 {
        min-width: 100px;
    }
</style>