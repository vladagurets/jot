<script>
  import { getMembers } from 'src/utils'
  import { curUser } from 'src/store'

  const next = () => curUser.set(getMembers()[$curUser + 1] ? $curUser + 1 : 0)

  const prev = () => curUser.set(getMembers()[$curUser - 1] ? $curUser - 1 : getMembers().length - 1)
</script>

<style>
  div {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
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
    /* filter: drop-shadow(10px 10px 7px rgba(var(--font-color-set), .5)); */
  }

  .right {
    filter: drop-shadow(3px 0 5px rgba(var(--font-color-set), .9));
    transform: rotateY(180deg)
  }
</style>

<div>
  <button class="left" on:click={prev}>
    ◁
  </button>
  <button class="right" on:click={next}>
    ◁
  </button>
</div>