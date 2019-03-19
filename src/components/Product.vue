<template>
    <div id="productPage">
        
    </div>
</template>
<script>
  export default{
      data(){
          return{

          }
      },
      methods: {
          getProduct(){
              var classify=this.$route.query.classify;
              var pid=this.$route.query.pid;
              var url="http://127.0.0.1:3000/product?classify="+classify+"&id="+pid;
              this.axios.get(url).then(result=>{
                  console.log(result);
              })
          }
      },
      created(){
          this.getProduct();
      }
  }
</script>
<style>
    
</style>