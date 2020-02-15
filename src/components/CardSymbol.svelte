<script>
  import c from 'classnames'
  import { CARD_SYMBOLS } from 'src/constants'
  import { curUser } from 'src/store'

  $: index = Math.floor(Math.random() * 4)
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
  .red {
    color: #993233;
  }
</style>

<div class={c('top', {
  'red': index % 2 !== 0
})}>
  {CARD_SYMBOLS[index]}
</div>
<div class={c('bottom', {
  'red': index % 2 !== 0
})}>
  {CARD_SYMBOLS[index]}
</div>