<script>
  import Logo from 'src/components/Logo.svelte'
  import CardSymbol from 'src/components/CardSymbol.svelte'
  import BgImage from 'src/components/BgImage.svelte'
  import InstaIcon from 'src/components/InstaIcon.svelte'
  import Controlls from 'src/components/Controlls.svelte'
  import { curUser } from 'src/store'

  $: getstyle = () => {
    $curUser
    return `
      filter: invert(${Math.round(Math.random())});
    `.uglify()
  }
</script>

<style>
  main {
    viewport-fit: cover;
    position: fixed;
    height: calc(100vh - env(safe-area-inset-top));
    width: 100vw;
    background-color: var(--bg-color);
    transition: filter .1s linear;
    overflow: hidden;
  }
</style>

<main style={getstyle()}>
  <Logo />
  <CardSymbol />
  <InstaIcon />
  <BgImage />
  <Controlls />
</main>
