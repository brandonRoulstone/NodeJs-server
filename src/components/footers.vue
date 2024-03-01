<template>
    <div>
        <footer>
            &copy; unity demas {{ date() }}
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        date() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style>
    /* Add your styles here if needed */
</style>
