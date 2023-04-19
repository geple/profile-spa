<template>
    <div>
        <h1>Contact</h1>
        <div class="container">
            <div class="column">
                <h2>MAIL</h2>
                <a href="mailto:gplloyd97@gmail.com">gplloyd97@gmail.com</a>
            </div>
            <div class="column">
                <h2>SOCIALS</h2>
                <div class="links">
                    <ul>
                        <li><a href="https://github.com/geple" target="_blank">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/george-lloyd/" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.column {
    flex: 1;
    margin-bottom: 2rem;
}
ul {
    position: relative;
    flex-direction: column;
    align-items: center;
    top: -3rem;
    left: 7rem;
    bottom: 0;
    right: 0;
    // left: unset;
    padding: 1em;
    list-style: none;
}
h2 {
    display: inline;
    margin-right: 1rem;
    font-size: 1.5rem;
}
a {
    font-size: 1.5rem;
}
</style>