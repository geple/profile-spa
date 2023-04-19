<script>
import { RouterLink, RouterView } from 'vue-router'
import resume from '/public/GeorgeLloyd CV.pdf'

export default {
  data() {
    return {
      menuOpen: false,
      favicons: {},
      resume
    }
  },
  created () {
    this.favicons = {
      'light': "../earth-oceania-light.svg",
      'dark': "../earth-oceania-dark.svg"
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
      <nav class="navbar-container">
        <a href="/" aria-label="George Lloyd home" class="home-link">
          <p style="font-size: 2.5rem;">G</p>
        </a>
        <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" :aria-expanded="menuOpen" @click="toggle">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div id="navbar-menu" class="sidebar" aria-labelledby="navbar-toggle" @click.self="toggle">
          <ul class="navbar-links">
            <li class="navbar-item"><a href="/about" class="navbar-link">About Me</a></li>
            <li class="navbar-item"><a href="/work" class="navbar-link">Work</a></li>
            <li class="navbar-item"><a href="/contact" class="navbar-link">Contact</a></li>
            <li class="navbar-item"><a :href="resume" class="navbar-link resume" target="_blank">Resume</a></li>
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
      <ul>
        <li class="footer-item"><a target="_blank" href="mailto: gplloyd97@gmail.com" aria-label="Email link"><font-awesome-icon class="footer-icon" icon="fa-solid fa-envelope" /></a></li>
        <li class="footer-item"><a target="_blank" href="https://github.com/geple" aria-label="GitHub profile"><font-awesome-icon class="footer-icon" icon="fa-brands fa-github" /></a></li>
        <li class="footer-item"><a target="_blank" href="https://www.linkedin.com/in/george-lloyd/" aria-label="LinkedIn profile"><font-awesome-icon class="footer-icon" icon="fa-brands fa-linkedin-in" /></a></li>
        <li class="footer-item"><a target="_blank" href="https://open.spotify.com/user/sanddoggo" aria-label="Spotify profile"><font-awesome-icon class="footer-icon" icon="fa-brands fa-spotify" /></a></li>
        <li class="footer-item"><a target="_blank" href="https://codepen.io/geple" aria-label="Codepen profile"><font-awesome-icon class="footer-icon" icon="fa-brands fa-codepen" /></a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* ## Navbar */
/* Tutorial: https://www.aleksandrhovhannisyan.com/blog/responsive-navbar-tutorial/#what-were-building */

#navbar {
  position: fixed;
  height: var(--navbar-height);
  background-color: var(--color-primary);
  padding: 0 1.5rem;
  left: 0;
  right: 0;
  margin: 0 calc(8px + 1vw);
  box-shadow: 0 10px 6px rgba(4, 49, 58, 0.6);
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
}

/* Navbar items */
.home-link, 
.navbar-link {
  transition: color 200ms ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.navbar-link {
  justify-content: center;
  width: 100%;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
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
  background-color: var(--color-text);
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
  visibility: visible;
  right: -1000px;
  }
.opened #navbar-menu {
  right: 0;
  visibility: visible;
  /* background-color: rgba(0, 0, 0, 0.4); */
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
ul {
  list-style: none;
  display: flex;
}
.navbar-links {
  position: absolute;
  flex-direction: column;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: unset;
  padding: 1em;
  background-color: var(--color-primary);
  box-shadow: -4px 30px 30px rgba(0, 0, 0, 0.4);
}
.navbar-item {
  margin: 0.4rem;
  width: 100%;
}

/* ## Resume button only */
.resume {
  border-style: solid;
  border-width: 2px;
  border-color: var(--highlight);
  transition: background-color 0.3s ease-out;
}
.resume:hover {
  background-color: rgba(158, 176, 166, 0.4);
}

/* ## Desktop Layout navigation bar */
@media screen and (min-width: 900px) {
  #navbar-toggle, .opened {
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
    background-color: var(--color-primary);
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

/* ## Footer rules */
.foot {
  display: flex;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  max-height: 5rem;
  background-color: var(--footer-dark);
  padding-bottom: 1rem;
}
.footer-item {
  width: clamp(2rem, 10vw, 5rem);
}
.footer-icon {
  height: 30px;
}
@media screen and (max-width: 600px), (max-height: 650px) {
  .footer-icon {
    height: 20px;
  }
}


</style>
