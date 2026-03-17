<template>
<header class="header">

<h1 class="logo">
<i class="fa-solid fa-laptop-code icon-logo"></i>
<span class="bold-logo">Maria</span>Khan
</h1>

<!-- Hamburger -->
<div class="hamburger" @click="toggleMenu">
<span></span>
<span></span>
<span></span>
</div>

<nav :class="['nav-links', { active: menuOpen }]">

<RouterLink class="nav-item" to="/">
<i class="fa-regular fa-house"></i> Home
</RouterLink>

<RouterLink class="nav-item" to="/Project">
<i class="fa-brands fa-trello"></i> My Project
</RouterLink>

<RouterLink class="nav-item" to="/about">
<i class="fa-solid fa-circle-info"></i> About me
</RouterLink>

<RouterLink class="nav-item" to="/resume">
<i class="fa-regular fa-file"></i> Resume
</RouterLink>

</nav>

</header>
</template>

<script setup>
import { ref } from "vue"

const menuOpen = ref(false)

function toggleMenu(){
menuOpen.value = !menuOpen.value
}
</script>

<style>
.header{
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 10px;
  box-shadow:0 10px 10px rgba(54, 53, 53, 0.5);
  border-bottom: 1px solid rgb(87, 84, 84);
  position:fixed;
  width: 100%;
  background-color: black;
  top: 0;
  
}
.logo{
color:#bb8625;
font-size:28px;
font-weight:bold;
letter-spacing:1px;
margin-right:60px;
}

.icon-logo{
color:#bb8625;
font-size:33px;
margin:5px;
}

.bold-logo{
color:#ccc;
}

.nav-links{
display:flex;
gap:25px;
}

.nav-item{
color:#ccc;
text-decoration:none;
font-size:18px;
transition:0.3s;
}

.nav-item:hover{
color:#d4af37;
}

/* Hamburger */
.hamburger{
display:none;
flex-direction:column;
cursor:pointer;
gap:5px;
}

.hamburger span{
width:25px;
height:3px;
background:white;
}

/* Mobile */

@media (max-width:768px){

.nav-links{
display:none;
flex-direction:column;
position:absolute;
top:70px;
right:0;
background:#000;
width:200px;
padding:20px;
}

.nav-links.active{
display:flex;
}

.hamburger{
display:flex;
}

}
</style>