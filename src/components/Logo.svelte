<script>
  import c from 'classnames'
  import logoImage from 'public/logo.png'
  import { mobilecheck } from 'src/utils'

  const isMobile = mobilecheck()
</script>

<style>
  img {
    display: inline-flex;
    flex-direction: column;
    pointer-events: none;
    position: absolute;
    z-index: 1;
    background-size: contain;
    width: 60px;
  }
  .top {
    top: 15px;
    left: 20px;
    filter: drop-shadow(10px 10px 7px rgba(var(--font-color-set), .5));
  }
  .bottom {
    bottom: 15px;
    right: 20px;
    transform: rotateX(180deg);
    filter: drop-shadow(-10px 10px 7px rgba(var(--font-color-set), .5));
  }
</style>


<img
  src={logoImage}
  alt='JOT Logo'
  class='top'
/>

{#if !isMobile}
	<img
    src={logoImage}
    alt='JOT Logo'
    class='bottom'
  />
{/if}

