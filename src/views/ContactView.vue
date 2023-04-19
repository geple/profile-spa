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
    align-items: flex-start;
    flex: 1;
    margin-bottom: 2rem;
    overflow: hidden;
}
.links {
    display: inline-block;
    vertical-align: top;
    padding-left: 0;
    margin-top: 0;
}
ul {
    margin-left: 1rem;
    list-style: circle;
}
li {
    margin-bottom: 1rem;
}

h2 {
    display: inline-block;
    margin-right: 1.5rem;
    font-size: clamp(1rem, 3vw, 1.5rem);
    line-height: 1rem;
}
a {
    line-height: 1rem;

    font-size: clamp(1rem, 3vw, 1.5rem);
}
</style>