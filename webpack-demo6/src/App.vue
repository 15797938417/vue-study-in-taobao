<template>
    <div>
        <h1>打死打死打死打死打打</h1>
        <h2>{{msg}}</h2>
        <Foo/>
    </div>
</template>
<script>
    import Foo from "./components/Foo.vue"
    export default{
        data() {
            return {
                msg:'我是msg'
            }
        },
        components:{
            Foo
        }
    }
</script>
<style scoped>
    h1{
        color: red
    }
</style>