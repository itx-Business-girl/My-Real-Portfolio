<template>
  <div  class="footer">
    <h2 class="heading">© 2026 Maria Khan | Frontend Developer. All rights reserved.</h2>
    <p class="paragraph">Built with 😎 and Vue.js & Tailwind CSS.</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.footer{
    background-color: #141414;
    color: #ccc;
    padding: 15px 20px;       
    text-align: center;
    border-radius: 10px;
    margin-top: 5%;           
    display: flex;
    flex-direction: column;
    justify-content: center;   
    align-items: center;  
    border-top:1px solid gray ;
   
}

.heading{
    font-size: 16px;
    font-weight: 400;
    margin: 0;              
}

.paragraph{
    font-size: 15px;
    font-weight: 300;
    margin: 5px 0 0 0;      
}

@media (max-width:768px){
    .footer{
        text-align: center;
        padding: 12px 15px;
        margin-top: 5%;
    }
}
</style>