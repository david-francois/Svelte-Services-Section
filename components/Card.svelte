<script>
  import { data } from "../store/Store.js";
  import anime from "animejs";
  import { onMount } from "svelte";

  let cardAnimation = () => {
    anime({
      targets: ".box-container",
      translateX: [-2000, 0],
      delay: 500
    });
  };

  onMount(cardAnimation);

  const readMore = (a, b) => {
    let message = `${a} - ${b}`;
    alert(message);
  };
</script>

<div class="box-container">
  {#each $data as item}
    <div class="box">
      <img src={item.img} alt="">
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <a href={item.link} class="btn" on:click={readMore(item.title, item.content)}>Read more</a>
    </div>   
  {/each}
</div>

<style>
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

  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 15px;
  }

  .box-container .box {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background: #fff;
    text-align: center;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .box-container .box img {
    height: 80px;
    width: 80px;
  }

  .box-container .box h3 {
    color: #444;
    font-size: 22px;
    padding: 10px 0;
  }

  .box-container .box p {
    color: #777;
    font-size: 15px;
    line-height: 1.8;
    text-align: justify;
  }

  .box-container .box .btn {
    margin-top: 20px;
    display: inline-block;
    background: #333;
    color: #fff;
    font-size: 17px;
    border-radius: 5px;
    padding: 8px 25px;
  }

  .box-container .box .btn:hover {
    letter-spacing: 1px;
  }

  .box:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
    cursor: pointer;
  }
</style>