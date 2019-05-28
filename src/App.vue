<template>
  <div id="add" style=" text-align:center;">
        <input class="lhl-l" type="text" v-model="text">
        <button class="lhl-h" @click="handleClick">提交</button>
        <button class="lhl-k" @click="removeItem">删除第一条</button>
        <ol class="lhl">
        <li v-for="(item,index) in list" :key="index" @click="removeItem(index)">
                  {{item}}
        </li>
        </ol>

  </div>

 
  
</template>


<script>
     export default {
            data(){
              return({
                list:[
                  '一二三',
                  '三二踢',
                  '四五理'
                ],
                text:''
              })   
            },
            methods: {
              handleClick(){
                this.list.push(this.text)
                this.text=''
              },
              removeItem(index){
                    this.list.splice(index,1)
              }
            }
      }



</script>



<style>
.lhl-l {
  color:red;
  width:268px;
  height:30px;
  margin: 0 auto;
  border:1px red solid;
}

.lhl { 
  width:500px;
  margin-left:30%;
  background:#ff4f4c;
}
.lhl-k{    
       width:120px;
      }
.lhl-h{
  width:120px;

}


</style>
