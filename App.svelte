<script>
  import Card from "./components/Card.svelte";
  import anime from "animejs";
  import { onMount } from "svelte";

  let headingAnimation = () => {
    anime({
      targets: ".heading",
      translateY: [-200, 0]
    });
  };

  onMount(headingAnimation);
</script>

<div class="container">
  <h1 class="heading">Our services</h1>
  <Card/>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");

  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: 0.2s linear;
    scroll-behavior: smooth;
  }

  .container {
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    padding: 15px 9%;
    padding-bottom: 100px;
  }

  .container .heading {
    text-align: center;
    padding-bottom: 15px;
    color: #fff;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    font-size: 50px;
    transform: translateY(-200px);
  }

  @media (max-width: 768px) {
    .container {
      padding: 20px;
    }
  }
</style>

