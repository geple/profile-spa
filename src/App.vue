<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      menuOpen: false,
      favicons: {}
    }
  },
  created () {
    this.favicons = {
      'light': "../hat-wizard-solid-teal.svg",
      'dark': "../hat-wizard-solid-light-green.svg"
    }
  },
  mounted() {
    this.handleIcon()
  },
  methods: {
    toggle() {
      this.menuOpen = !this.menuOpen;
    },
    handleIcon() {
      let matcher = window.matchMedia('(prefers-color-scheme: dark)')
      const favicon = document.getElementById("favicon")
      console.log(favicon)
      if (matcher.matches) {
        favicon.href = this.favicons['dark']
      }
      else {
        favicon.href = this.favicons['light']
      }
    }
  }
}
</script>

<template>
  <header id="navbar" :class="{ opened: menuOpen}">
      <nav class="navbar-container container">
        <a href="/" aria-label="George Lloyd home" class="home-link">
          <font-awesome-icon icon="fa-solid fa-hat-wizard" size="3x"/>
        </a>
        <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" :aria-expanded="menuOpen" @click="toggle">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div id="navbar-menu" class="sidebar" aria-labelledby="navbar-toggle" @click.self="toggle">
          <ul class="navbar-links">
            <li class="navbar-item"><a href="/about" class="navbar-link">About Me</a></li>
            <li class="navbar-item"><a href="/xperience" class="navbar-link">Experience</a></li>
            <li class="navbar-item"><a href="/projects" class="navbar-link">Projects</a></li>
            <li class="navbar-item"><a href="/contact" class="navbar-link">Contact</a></li>
          </ul>
        </div>
      </nav>
  </header>

  <!-- Page content -->
  <div class="content">
      <RouterView />
  </div>

  <!-- Footer -->
  <div class="foot">
    <div class="container">
      <p id="foot-para">Footer goes here</p>
    </div>
  </div>
</template>

<style>
/* # Navbar */
/* Tutorial: https://www.aleksandrhovhannisyan.com/blog/responsive-navbar-tutorial/#what-were-building */

#navbar {
  position: fixed;
  height: var(--navbar-height);
  /* background-color: var(--color-secondary); */
  left: 0;
  right: 0;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); */
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
}

.home-link, 
.navbar-link {
  transition: color 200ms ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
}
.navbar-links {
  background-color: var(--footer-light);
}

.navbar-link {
  justify-content: center;
  width: 100%;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
}

.navbar-link:is(:focus, :hover) {
  color: var(--color-text);
  background-color: var(--footer-light);
}

/* Navbar Toggle button */
#navbar-toggle {
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
}
#navbar-toggle:is(:focus, :hover) .icon-bar {
  background-color: var(--highlight);
}
.opened #navbar-toggle
.icon-bar:is(:first-child, :last-child) {
  position: absolute;
  margin: 0;
  width: 30px;
}
.opened #navbar-toggle .icon-bar:first-child {
  transform: rotate(45deg);
}
.opened #navbar-toggle .icon-bar:nth-child(2) {
  opacity: 0;
}
.opened #navbar-toggle .icon-bar:last-child {
  transform: rotate(-45deg);
}
#navbar-menu {
  position: fixed;
  width: 100%;
  top: var(--navbar-height);
  bottom: 0;
  transition: visibility 0.2s ease-in-out,
              right 0.2s ease-in-out,
              background-color 0.2s ease-in-out;
  visibility: hidden;
  right: -1000px;
  }
.opened #navbar-menu {
  right: 0;
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.4);
}

.icon-bar {
  display: block;
  width: 25px;
  height: 4px;
  margin: 2px;
  transition: background-color 200ms ease-in-out,
              transform 200ms ease-in-out,
              opacity 200ms ease-in-out;
              
  background-color: white;
}

/* Navigation links */
.navbar-links {
  list-style: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: unset;
  padding: 1em;
  box-shadow: -5px 20px 20px rgba(0, 0, 0, 0.3);
}
.navbar-item {
  margin: 0.4rem;
  width: 100%;
}

/* ## Desktop Layout navigation bar */
@media screen and (min-width: 900px) {
  #navbar-toggle, #navbar-toggle[aria-expanded='true'] {
    display: none;
  }

  #navbar #navbar-menu, 
  .opened #navbar-menu {
    visibility: visible;
    transition: opacity 0.3s ease-in-out;
    position: static;
    display: block;
    height: 100%;
    width: 500px;
  }
  .navbar-links {
    background-color: inherit;
  }

  #navbar .navbar-links, 
  .opened .navbar-links {
    margin: 0;
    padding: 0;
    box-shadow: none;
    position: static;
    flex-direction: row;
    list-style-type: none;
    max-height: max-content;
    width: 100%;
    height: 100%;
  }
  #navbar .navbar-link:last-child {
    margin-right: 0;
  }
}

.logo {
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 1.5em var(--highlight));
}
.foot {
  display: flex;
  align-self: flex-end;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  max-height: 5rem;
  background-color: var(--footer-dark);
}
#foot-para {
  display: inline;
  padding: 0 0.5rem;
}

</style>
