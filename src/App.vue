<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <ul>
          <li>
              <div class="logo">
                <a href="/" aria-label="George Lloyd home">
                  <img src="./assets/favicon.ico" alt="Site logo">
                </a>
              </div>
            </li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
      </nav>
    </div>
  </header>

  <div class="content">
    <RouterView />
  </div>

  <div class="foot">
    <p>Footer goes here</p>
    <a href="https://www.flaticon.com/free-icons/letter-g" title="letter g icons">Page icon created by popo2021</a>
  </div>
</template>

<style>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: visible;
}
li {
  float: right;
  margin-top: 40px;
}
li a {
  color: white;
  padding:14px 16px;
  will-change: background-color;
  transition: background-color 300ms;
}
li a:hover {
  background-color: #333;
}
.logo {
  height: 6em;
  position: relative;
  top: 0px;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 1.5em var(--color-highlight));
}
.foot {
  display: block;
  position: absolute;
  bottom: 0;
  margin: 2rem 1rem;
  align-items: center;
}

/* Specific to home icon */
li:first-child {
  float: left;
  margin-top: 0;
}
li:first-child a {
  will-change: unset;
  transition: none;
}
li:first-child a:hover {
  background-color: inherit;
}
</style>
