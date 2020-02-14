<script>
  import { onMount, onDestroy } from 'svelte'
  import { curRoute, curUser } from 'src/store'
  import { getInitRoute } from 'src/utils'
  import router from 'src/router'

  // $: console.log($curRoute);

  $: component = router.find(r => r.exact ? $curRoute === r.path : $curRoute.includes(r.path)).component
    
  const onPopState = () => {
    const newRoute = getInitRoute()
    if (newRoute.includes('crew')) {
      curUser.set(newRoute.split('#')[1])
    } else {
      curUser.set(null)
    }

    curRoute.set(newRoute)
  }
  onMount(() => {
    window.addEventListener('popstate', onPopState)
  })
  onDestroy(() => {
    window.removeEventListener('popstate', onPopState)
  })
</script>

<svelte:component this={component} />