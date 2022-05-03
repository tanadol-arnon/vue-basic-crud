<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1>Create Product</h1>
            <hr>
            <form>
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
                    <input type="text" class="form-control" v-model="product.price">
                </div>
                
                <div class="d-grid gap-2">
                    <button class="btn btn-success btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product: {
                name: '',
                detail: '',
                price: ''
            }
        }
    },
    methods: {
        handleSubmitFrom() {

        }
    }
}
</script>
<style>
    
</style>