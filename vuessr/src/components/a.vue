<template>
    <div>加油数据aa{{hhh}}
        <button @click='demo()'> 添加</button>
        <div style="position:relative;z-index:10">123123</div>
        <div style='position:relative;z-index:1'>
            <div style="position:absolute">
            <div style="position:fixed;z-index:100;width:100%;height:100%;background-color:red;top:0;left:0;"></div>
            </div>
        </div>
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