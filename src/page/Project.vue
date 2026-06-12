<template>
    <h1 class="heading-project">My Recent <strong class="strong-text">Works</strong></h1>
    <p class="paragraph">Here <strong class="strong-text">you can explore</strong> my recent <strong class="strong-text">projects,</strong> built with modern <strong class="strong-text">frontend technologies</strong> and real-world use cases.</p>
   <div class="projects-container">

  <div class="project-card">
    <img class="project-img" src="../assets/bangles.jpeg" alt="coffee" >
    <div class="project-content">
      <h3 class="project-title">Kashmiri angles Website</h3>
      <p class="project-text">
        Developed an e-commerce website “Kashmiri Bangles” featuring a wide range of bangles in different styles, built with HTML, CSS, JavaScript, and Vue.js, focusing on elegance, usability, and responsive design.      </p>
      <a class="project-btn" href="https://bangles-website-mvlg99-bvidw9h6u-maria-khan448s-projects.vercel.app/">View Project</a>
    </div>
  </div>


  <div class="project-card">
    <img class="project-img" src="../assets/fast food.jpeg" alt="zinger burger">
    <div class="project-content">
      <h3 class="project-title">Fast food Website</h3>
      <p class="project-text">
        A Quick Bite fast food website designed to showcase delicious and quick meal options with a modern and user-friendly interface. Built using HTML, CSS, JavaScript, and Vue.js, it focuses on smooth navigation, attractive visuals, and a seamless ordering experience.
      </p>
      <a href="https://fast-food-website-c25x-9onfczu1w-maria-khan448s-projects.vercel.app/"><button class="project-btn">View Project</button></a>
    </div>
  </div>


  <div class="project-card">
    <img class="project-img" src="../assets/abaya.jpeg" alt="cake shop">
    <div class="project-content">
      <h3 class="project-title">Abaya's Shop Website</h3>
      <p class="project-text">
        ylish e-commerce website for an Abaya shop showcasing a variety of elegant and modern abaya designs. Built using HTML, CSS, JavaScript, and Vue.js, it focuses on a clean layout, smooth navigation, and a responsive shopping experience.
      </p>
      <a
   href="https://abaya-project-e4fy66z6u-maria-khan448s-projects.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
     class="project-btn"
  >
  View Project
  </a>
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

