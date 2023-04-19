<script>
import profileImage from '/public/img/profile-photo.jpg'

export default {
    data() {
        return {
            profileImage
        };
    }
}
</script>

<template>
    <div>
        <h1>About</h1>
        <div class="container">
            <div class="column">
                <h2>Skills</h2>
                <h3>Languages</h3>
                <div class="container" style="margin-bottom: 1rem;">
                    <div class="column">
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>C</li>
                        </ul>
                    </div>
                    <div class="column">
                        <ul>
                            <li>Vue</li>
                            <li>Java</li>
                            <li>C#</li>
                        </ul>
                    </div>
                </div>
                <p>These are the languages I have actively used in projects or work. I am always curious and am quick to pick up new languages.</p>
                <h2>About me</h2>
                <p>I'm George Lloyd, a 25-year-old software engineer from Melbourne Australia.</p>
                <p>
                    Whilst studying a bachelor of mechanical engineering at Monash University, I had the opportunity to join the <a href="https://www.saea.com.au/formula-sae-a" target="_blank">Formula Student</a> team <a href="https://www.monashmotorsport.com/" target="_blank">Monash Motorsport</a>. It exposed me to the practical side of engineering. In 2019, I led the Chassis and Suspension sub-team, and in 2020, I took the role of Chief Technical Officer, leading the team's technical direction. I enjoyed coding in <span class="accent">MATLAB</span> to create physics simulations, such as a lap-time simulator to model the car's performance around a track.
                </p>
                
                <p>
                    After graduating, I worked as a Mechanical Design Engineer at <a href="https://www.adde.com.au/" target="_blank">Andrew Donald Design Engineering</a>. It was a great experience that unfortunately ended early with  the company entering liquidation at the end of 2022.
                </p>
                <p>
                    Finding myself redundant, I decided to pursue my interest in computer science. I have been building my skills in a variety of languages, and taking online courses to such as <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank">Harvard's CS50x</a>. It's been an exciting journey, and I'm ready to apply my newfound skills in the tech industry as a software engineer.
                </p>
                <p>
                    I'm actively searching for opportunities. If you think my skills could be useful in your team, <a href="/contact" target="_blank">contact me</a>.
                </p>

            </div>
            <div class="column photo">
                <img :src="profileImage" alt="Portrait of George">
                <div class="container video">
                    <iframe src="https://player.vimeo.com/video/381307129?h=4823cb7050&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
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
    max-height: 75vh;   // This may cause an issue on wide screens
    overflow: hidden;
}
.photo {
    text-align: center;
}
@media screen and (max-width: 900px) {
    .photo {
        transform: translate(50%, 0%);
        order: -1;
        width: 50%;
    }
    .video {
        display: none;
    }
}
img {
    border-radius: 5px;
    width: 70%;
    max-width: 25rem;
}
.video {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
}
.container.video {
    margin: 0;
}
iframe {
    --width: 50rem;
    max-width: var(--width);
    max-height: calc(var(--width) * 9 / 16);
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    border-radius: 6px;
}
ul {
    list-style: circle inside;
}

</style>