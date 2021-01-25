<template>
    <div>
        <category v-for="(list, i) in lists.list" :key="i" :list="list"/>
    </div>
</template>

<script>
import lists from "@/boxes/index.js"
    export default {
        layout: 'default',
        components:{
            category: () => import('@/components/box/Category.vue')
        },
        data() {
             return  {
                lists: lists
            }
         },
         mounted(){
            // console.log(this.list.list[0][0])
         }

    }
</script>

<style lang="scss" scoped>

</style>