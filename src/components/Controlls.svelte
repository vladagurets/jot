<script>
  import { onMount } from 'svelte'
  import { getMembers } from 'src/utils'
  import { curUser } from 'src/store'

  let prevButton
  let nextButton

  const next = () => curUser.set(getMembers()[$curUser + 1] ? $curUser + 1 : 0)

  const prev = () => curUser.set(getMembers()[$curUser - 1] ? $curUser - 1 : getMembers().length - 1)


  function preventZoom(e) {
    var t2 = e.timeStamp;
    var t1 = e.currentTarget.dataset.lastTouch || t2;
    var dt = t2 - t1;
    var fingers = e.touches.length;
    e.currentTarget.dataset.lastTouch = t2;

    if (!dt || dt > 500 || fingers > 1) return; // not double-tap

    e.preventDefault();
    e.target.click();
  }

  onMount(() => {
    prevButton.addEventListener('touchstart', preventZoom)
    nextButton.addEventListener('touchstart', preventZoom)
  })
</script>

<style>
  div {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    text-align: center;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 10rem;
    cursor: pointer;
    user-select: none;
  }

  .left:active {
    transform: scale(.99)
  }

  .right:active {
    transform: rotateY(180deg) scale(.99)
  }

  .left {
    filter: drop-shadow(3px 0 5px rgba(var(--font-color-set), .9));
  }

  .right {
    filter: drop-shadow(3px 0 5px rgba(var(--font-color-set), .9));
    transform: rotateY(180deg)
  }
</style>

<div>
  <--! <button class="left" on:click={prev} bind:this={prevButton}>
    ◁
  </button> -->
  <button class="right" on:click={next}  bind:this={nextButton}>
    ◁
  </button>
</div>
