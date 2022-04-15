<template>

    <div>
      <h2>i love you 爱了{{count}}</h2>  
      <button @click='count++'>click</button>
    </div>
</template>


<script>
// 组件当中的this代表当前组件对象
export default {
    data() {
        return {
          count:0,
        };
    },
}
</script>
<style >
   h2{
       color:hotpink
   } 
</style>