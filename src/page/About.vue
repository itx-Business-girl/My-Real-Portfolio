<template>

<div class="about-container">

<h1 class="about-heading1">About the Developer</h1>

<p class="about-paragraph">
I’m <strong class="paragraph-strong">Maria</strong>, a passionate 
<strong class="paragraph-strong">Frontend Web Developer</strong> from Pakistan,
dedicated to crafting clean, responsive, and user-friendly websites.
</p>

<p class="paragraph2">
“Talent alone isn’t enough; hard work makes it 
<strong class="paragraph-strong">shine.</strong>”
</p>

<h1 class="about-heading2">Professional Skillset</h1>

<div class="buttons-container">
<button class="button-about">JavaScript (ES6+)</button>
<button class="button-about">HTML5 & CSS3</button>
<button class="button-about">Tailwind CSS</button>
<button class="button-about">Vue.js</button>
<button class="button-about">Git & GitHub</button>
<button class="button-about">Responsive Design</button>
</div>

<h1 class="heading3">Development Tools</h1>

<div class="buttons-container">
<button class="button-about">Visual Studio Code</button>
<button class="button-about">Git & GitHub</button>
<button class="button-about">Windows</button>
<button class="button-about">Browser DevTools</button>
</div>
</div>

</template>

<style scoped>
  .about-container{
  max-width:1000px;
  margin:auto;
  padding:20px;
  text-align:center;
  background:black; /* same as portfolio background */
}

.about-heading1,
.about-heading2,
.heading3{
  color:#868383; /* gray color from previous design */
  font-size:30px;
  margin-top:60px;
}

.about-paragraph{
  color:#ccc; /* paragraph color same as portfolio */
  font-size:20px;
  line-height:1.6;
  margin-top:10px;
}

.paragraph2{
  color:#ccc; 
  font-size:18px;
  margin-top:10px;
}

.paragraph-strong{
  color:#d4af37; /* golden accent from portfolio */
}

/* Buttons container */

.buttons-container{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:15px;
  margin-top:30px;
}

/* button */

.button-about{
  padding:12px 20px;
  background:transparent;
  border-radius:20px;
  color:#ccc; /* gray text */
  border:2px solid gray;
  cursor:pointer;
  transition:0.3s;
  font-size:14px;
}

.button-about:hover{
  border:2px double #ccc;
  box-shadow:0 10px 10px rgba(128,123,123,0.5);
  color:#d4af37; /* golden hover text */
  transform:translateY(-4px);
}

/* Tablet */

@media (max-width:768px){

.about-heading1,
.about-heading2,
.heading3{
  font-size:26px;
}

.about-paragraph{
  font-size:17px;
}

}

/* Mobile */

@media (max-width:480px){

.buttons-container{
  gap:10px;
}

.button-about{
  width:100%;
  max-width:250px;
}

}
</style>


















<!-- <style> -->
 /* .about-heading1{
    color: rgb(134, 131, 131);
    font-size: 30px;
    font-weight: 500px;
    margin-top: 10%;
    text-align: center;

 }

 .about-paragraph{
    color: #adacac;
    font-size: 21px;
    font-weight: 100;
    margin-bottom: 20px;
    margin-top: 12px;
    text-align: center;
 }
 .paragraph-strong{
    color: #d4af37;
 }
 .paragraph2{
    color: #ccc;
    font-size: 18px;
    font-weight: 30px;
    text-align: center;
 }

 .about-heading2{
    color: rgb(134, 131, 131);
    font-size: 30px;
    font-weight: 500px;
    margin-top: 10%;
    text-align: center;
 }

 .button-about{
    height: 100%;
    width: 20%;
    padding: 20px;
    margin: 20px;
    background:transparent;
    border-radius: 20px;
    color: #ccc;
    text-transform: uppercase;
    border:2px solid gray ;
    text-align: center;
    flex-wrap: wrap;
    margin-top: 6%;
    cursor: pointer;
 }
   .button-about:hover{
    border:2px double #ccc;
    box-shadow:0 10px 10px rgb(128, 123, 123,0.5) ;
    color: rgb(177, 149, 116);
    transform: translateY(-4px); 
   }

   .heading3{
    color: rgb(128, 123, 123);
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-top: 15%;
   } */
<!-- </style> -->