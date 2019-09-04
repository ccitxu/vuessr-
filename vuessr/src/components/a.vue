<template>
    <div>加油数据aa{{hhh}}
        <button @click='demo()'> 添加</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
         hhh:' aa你好啊！'
        }
    },
    methods:{
     demo(){
         alert('aaa');
     }
    },
    created(){
    }
}
</script>