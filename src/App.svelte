<script>
  import Logo from 'src/components/Logo.svelte'
  import CardSymbol from 'src/components/CardSymbol.svelte'
  import BgImage from 'src/components/BgImage.svelte'
  import Info from 'src/components/Info.svelte'
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
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: var(--bg-color);
    transition: filter .1s linear;
    overflow: hidden;
  }
</style>

<main style={getstyle()}>
  <Logo />
  <CardSymbol />
  <BgImage />
  <section>
    <Controlls />
    <Info />
  </section>
</main>
