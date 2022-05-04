<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1 class="fw-bold">Edit Product</h1>
            <hr>
            <form @submit.prevent="handleUpdateFrom">
                <div class="form-group my-3">
                    <label for="name" class="fw-bold">Name</label>
                    <input type="text" class="form-control" v-model="product.name">
                </div>
                <div class="form-group mb-3">
                    <label for="detail" class="fw-bold">Detail</label>
                    <input type="text" class="form-control" v-model="product.detail">
                </div>
                <div class="form-group mb-3">
                    <label for="price" class="fw-bold">Price</label>
                    <input type="number" class="form-control" v-model="product.price">
                </div>
                
                <div class="d-grid gap-2">
                    <button class="btn btn-warning text-white btn-block">Update data</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            product: {}
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-product/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.product = res.data;
        }).catch((err) => {
                console.log(err);
        });
    },
    methods: {
        handleUpdateFrom() {
            let apiURL = `http://localhost:4000/api/update-product/${this.$route.params.id}`;

            axios.put(apiURL, this.product).then((res) => {
                console.log(res);
                this.$router.push('/view');
            }).catch((err) => {
                console.log(err);
            });
        }
    }    
}
</script>
<style>
    
</style>