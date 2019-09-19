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
      
    },
    async demo(axios){
         await axios.get('http://localhost:8008/api/info').then(res => {
                 this.content=res;
                 return res;
          })
        
     },
    created(){
    }
}
</script>