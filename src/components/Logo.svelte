<script>
  import c from 'classnames'
  export let position
</script>

<style>
  div {
    display: inline-flex;
    flex-direction: column;
    cursor: pointer;
    position: absolute;
    z-index: 1;
  }
  span {
    font-size: 40px;
    font-weight: bold;
  }
  .top {
    top: 15px;
    left: 20px;
    text-shadow: var(--font-shadow-bottom-right);
  }
  .bottom {
    bottom: 15px;
    right: 20px;
    transform: rotateX(180deg);
    text-shadow: var(--font-shadow-bottom-left);
  }
</style>

<div
  class={c({
    'top': position === 'top',
    'bottom': position === 'bottom',
  })}
>
  <span>J1</span>
  <span>T2</span>
</div>
