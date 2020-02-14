<script>
  import c from 'classnames'
  export let position
</script>

<style>
  div {
    position: absolute;
    z-index: 1;
    font-size: 60px;
    pointer-events: none;
  }

  .top {
    top: 30px;
    right: 20px;
    text-shadow: var(--font-shadow-bottom-left);
  }
  .bottom {
    bottom: 30px;
    left: 20px;
    transform: rotateX(180deg);
    text-shadow: var(--font-shadow-bottom-right);
  }
</style>

<div class={c({
  'top': position === 'top',
  'bottom': position === 'bottom',
})}>
  ♤
</div>