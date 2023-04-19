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
                <p>Hi there, my name is George Lloyd. I'm a 25yo professional living in the inner suburbs of Melbourne Australia.</p>
                <p>
                    During my time at university, I had the opportunity to join the <a href="https://www.saea.com.au/formula-sae-a">Formula Student</a> team <a href="https://www.monashmotorsport.com/">Monash Motorsport</a>. It exposed me to the practical side of engineering and taught me the values of teamwork, diversity, shared goals. In 2019, I led the Chassis and Suspension sub-team, and in 2020, I took the role of Chief Technical Officer, leading the team's technical direction.
                </p>
                <div class="video">
                    <iframe src="https://player.vimeo.com/video/381307129?h=4823cb7050&color=ffffff&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p>
                    After graduating, I began working at <a href="https://www.adde.com.au/">Andrew Donald Design Engineering</a>. It was an incredible experience, and strengthened my time management and communication. Unfortunately, at the end of 2022 the company entered liquidation and the team parted ways.
                </p>
                <p>
                    Through my degree, I found a love of coding. With Monash Motorsport
    
                    I've been studying computer science since then and have completed Harvard University's online "Introduction to computer science" course. It's been an exciting journey, and I'm eager to apply my newfound skills in the tech industry as a software engineer.
                </p>
                <p>
                    I'm actively searching for opportunities, and I'm excited to see where my journey takes me. Thank you for joining me on this adventure, and I hope to connect with potential employers soon.
                </p>
            </div>
            <div class="column photo">
                <img :src="profileImage" alt="Portrait of George">
            </div>
        </div>

    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.column {
    padding: 1rem 2rem;
    padding-left: 0;
    flex: 1;
}
.photo {
    text-align: center;
}
@media screen and (max-width: 900px) {
    .photo {
        order: -1;
    }
}
img {
    border-radius: 5px;
    width: 80%;
    max-width: 35rem;
}
.video {
    padding:56.25% 0 0 0;
    position:relative;
}
iframe {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius: 6px;
}

</style>