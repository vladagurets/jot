<script>
  import Logo from 'src/components/Logo.svelte'
  import CardSymbol from 'src/components/CardSymbol.svelte'
  import TopTitle from 'src/components/TopTitle.svelte'
  import BackgroundImages from 'src/components/BackgroundImages.svelte'

	// import Link from 'src/components/Link.svelte'
	import Route from 'src/components/Route.svelte'
  export let name
</script>

<style>
  main {
    width: 100%;
    height: 100%;
    position: relative;
  }
  div {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
</style>

<main>
  <TopTitle />

  <div>
    <Route />
  </div>

  <!-- Absolute components -->
  <Logo />
  <CardSymbol />
  <BackgroundImages />
  <!--                     -->
</main>
