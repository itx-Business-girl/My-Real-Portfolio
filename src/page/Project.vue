<template>
    <h1 class="heading-project">My Recent <strong class="strong-text">Works</strong></h1>
    <p class="paragraph">Here <strong class="strong-text">you can explore</strong> my recent <strong class="strong-text">projects,</strong> built with modern <strong class="strong-text">frontend technologies</strong> and real-world use cases.</p>
   <div class="projects-container">

  <div class="project-card">
    <img class="project-img" src="https://i.pinimg.com/1200x/9f/6b/59/9f6b5941056b110cf32dfc9230134ceb.jpg" alt="coffee" >
    <div class="project-content">
      <h3 class="project-title">Coffee Shop Website</h3>
      <p class="project-text">
        Responsive coffee shop website built with Vue.js and Tailwind CSS.
      </p>
      <button class="project-btn">View Project</button>
    </div>
  </div>


  <div class="project-card">
    <img class="project-img" src="https://i.pinimg.com/736x/c9/a4/0e/c9a40e440872a29c6b336d5b9da7ef71.jpg" alt="zinger burger">
    <div class="project-content">
      <h3 class="project-title">Zinger Burger Website</h3>
      <p class="project-text">
        Zinger Burger landing page built using Vue.js and Tailwind CSS,
      </p>
      <button class="project-btn">View Project</button>
    </div>
  </div>


  <div class="project-card">
    <img class="project-img" src="https://i.pinimg.com/736x/df/c4/4f/dfc44fd4e5a8ad0e3d6f3d612bd833c9.jpg" alt="cake shop">
    <div class="project-content">
      <h3 class="project-title">Cake Shop Website</h3>
      <p class="project-text">
        Cake shop landing page built using Vue.js and Tailwind CSS,
      </p>
      <button class="project-btn">View Project</button>
    </div>
  </div>


  <div class="project-card">
    <img class="project-img" src="https://i.pinimg.com/736x/d0/04/c2/d004c2aefad650c114fad2010b35674c.jpg" alt="ring website">
    <div class="project-content">
      <h3 class="project-title">Girl Rings Website</h3>
      <p class="project-text">
         Girl rings landing page built using Vue.js and Tailwind CSS,
      </p>
      <button class="project-btn">View Project</button>
    </div>
  </div>


</div>
</template>


<style scoped>
.heading-project{
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top:10%;
}
.paragraph{
  color: #ffffff;
  font-size: 18px;
  font-weight: 200;
  align-items: center;
  margin-left: 7%;
  margin-top: 10px;

}
 .projects-container{
display:flex;
flex-wrap:wrap;
justify-content:center;
flex-direction: row;
gap:30px;
padding:40px;
margin-top: 13px;
}

.project-card{
width:300px;
background:#ffffff;
border-radius:12px;
overflow:hidden;
box-shadow:0 20px 25px rgba(238, 210, 50, 0.15);
transition:0.3s;
}

.project-card:hover{
transform:translateY(-10px);
box-shadow:0 12px 30px rgba(0,0,0,0.25);
}

.project-img{
width:100%;
height:320px;
object-fit:cover;
}

.project-btn{
display:inline-block;
padding:8px 16px;
background:#000000;
color:white;
text-decoration:none;
border-radius:6px;
font-size:14px;
transition:0.3s;
margin-left: 64px;
}

.project-btn:hover{
background:#D4AF37;
}


.project-content{
padding:20px;
}

.project-title{
font-size:20px;
font-weight:bold;
margin-bottom:10px;
margin-left: 10%;
}

.project-text{
font-size:14px;
color:#555;
line-height:1.5;
margin-bottom:15px;
margin-left: 10%;
}
@media (max-width:768px){
  .heading-project{
    margin-top: 20%;
  }
}
 
</style>

