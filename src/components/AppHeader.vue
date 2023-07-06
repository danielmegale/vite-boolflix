<script>
export default {
    data() {
        return {
            searchTerm: '',
        }
    },
    emits: ['change-term', 'form-submit']
}
</script>

<template>
    <div class="d-flex justify-content-between align-items-center container">
        <h1 class="text-danger">BoolFlix</h1>
        <form @submit.prevent="$emit('form-submit')">
            <input type="text" placeholder="Search..." v-model.trim="searchTerm" @keyup="$emit('change-term', searchTerm)">
            <button @submit="$emit('form-submit')">Seach</button>
        </form>
    </div>
</template>

<style></style>
