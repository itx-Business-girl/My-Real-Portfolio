<template>
<section class="welcome-background">

  <p class="welcome-paragraph1" > Welcome To My Portfolio</p>

<div class="welcome-img-flex">

<div class="welcome-texts">



<h1 class="welcome-heading1">
Hi, I'm <strong class="strong-headin1 glow-text">Maria Khan</strong>
</h1>

<h2 class="welcome-heading2">Frontend</h2>
<h3 class="welcome-heading3">Developer</h3>

<p class="welcome-peragraph2">
<i>I build modern, responsive, and user-friendly websites<br>
        Using clean and efficient code. Transforming ideas into digital reality.</i>
</p>

<div class="buttons">
<button class="welcome-button">Html</button>
<button class="welcome-button">Css</button>
<button class="welcome-button">JavaScript</button>
<button class="welcome-button">Vue.js</button>
<button class="welcome-button">Tailwind</button>
</div>

</div>
<img class="welcome-image" src="../assets/girl.png">
</div>

</section>

<div class="div">
<i class="fa-brands fa-html5 icon"></i><i class="fa-brands fa-css icon"></i><i class="fa-brands fa-square-js icon"></i><i class="fa-brands fa-vuejs icon"></i><i class="fa-brands fa-square-github icon"></i>
</div>


<div class="hero-content-container"> 
  <div><h1 class="container-heading"><strong class="strong-text">The Person Behind the Code </strong> </h1></div>  
<p class="container-peragraph">I am a passionate <strong class="strong-text">Frontend Developer</strong> committed to crafting clean, responsive, and user-centric web experiences.
With a deep curiosity for how the web works, I quickly fell in love with programming and have been honing my skills ever since.
I believe in continuous learning, writing efficient code, and building interfaces that make the web a better, more engaging place for everyone.</p>

</div>
<h1 class="meetup-heading">Meet Me Here</h1>

<div class="icons-container">
  <div class="icon-item">
    <a href="https://github.com/Maria-khan448" target="_blank"><i class="fa-brands fa-square-github icon"></i></a>
    <span class="icon-item ">GitHub</span>
  </div>

  <div class="icon-item">
    <a href="https://www.instagram.com/maria.Khan458" target="_blank"><i class="fa-brands fa-square-instagram icon"></i></a>
    <span class="icon-item ">Instagram</span>
  </div>

  <div class="icon-item">
    <a href="https://www.linkedin.com/in/maria-khan-737600405/"><i class="fa-brands fa-square-linkedin icon "></i></a>
    <span class="icon-item ">LinkedIn</span>
  </div>

  <div class="icon-item">
    <a href="https://www.fiverr.com/sellers/maria_khan_dev/"><i class="fa-solid fa-briefcase  icon"></i></a>
    <span class="icon-item">Fiverr</span>
  </div>  
</div>
</template>


<style scoped>
.welcome-img-flex{
display:flex;
align-items:center;
justify-content:center;
gap:40px;

/* flex-wrap:wrap; */
}

.welcome-image{
width:100%;
max-width:510px;   /* desktop par badi image */
height:auto;
margin-bottom: 7%;
padding-left: 7%;
}

.welcome-texts{
max-width:500px;     
display:flex;
flex-direction:column;
margin-right:1%;
gap:15px;
margin-bottom: 13%;
}

/* Single icon + text */

.icons-container{
  display:flex;
  justify-content:center;
  gap:25px;         
  margin-top:20px;
  margin-bottom: 8%;
  flex-wrap: wrap;
}

.icon-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  cursor:pointer;
  transition: transform 0.3s, color 0.3s;
}

/* Hover effect */
.icon-item:hover{
  transform: translateY(-5px);
}

.icon-item span{
  margin-top:8px;
  font-size:16px;
  color:white; 
  font-weight: 700;
}

/* Icon box styling */
.icon{
  font-size:50px;             
  color: rgb(161, 149, 149);  
  padding:8px;
  border-radius:20px;
  background-color: rgb(14,13,13); 
  box-shadow:0 1px 20px rgba(87, 86, 84, 0.9);
  transition: color 0.3s, transform 0.3s;
}

/* Icon hover color */
.icon-item:hover .icon{
  color:#a17f20; 
}

@media (max-width:768px){

h1{
font-size:30px;
}

.welcome-paragraph1{
 margin-top: 30%;
 margin-left: 20%;
}


.welcome-img-flex{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.welcome-image{
  width: 350px;
}
.welcome-texts{
  margin-right: 0;
  align-items: center;
  max-width:100%;
}
.icons-container{
  font-size: 10px ;
}

/* .hero-content-container{
  display: flex;
 text-align: center;
   flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 80%;
  margin: auto;
  margin-top: 12%;
  min-height: 100px;
} */

.hero-content-container{
display:flex;
text-align:center;
flex-direction:column;
flex-wrap:wrap;
gap:15px;
max-width:80%;
margin:auto;
margin-top:12%;
min-height:100px;
}
.container-heading{
  font-size: 26px;
}
.container-peragraph{
font-size: 15px;
}
/* .container{
padding:15px;
} */
}


/* Laptop */

@media (min-width:1024px){

.welcome-img-flex{
 
  gap:45px;
}
.welcome-image{
 max-width: 60%;
  /* margin: auto; */
}
}

.glow-text{
color:rgb(224, 217, 217);
animation:glow 2s ease-in-out infinite alternate;
}

@keyframes glow{
from{
text-shadow:0 0 5px #8b6d35;
}
to{
text-shadow:
0 0 10px #c5a95d,
0 0 20px #c09442,
0 0 30px #c08746;
}
}

</style>
