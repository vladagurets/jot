<script>
  import { curRoute } from 'src/store'

  export let page
  export let onClick
  export let className


  function redirectTo (event) {
    onClick && onClick()
    // change current router path
    curRoute.set(page)
    // push the path into web browser history API
    window.history.pushState(null, null, window.location.origin + page)
  }
</script>

<a class={className} href={page} on:click={redirectTo}>
  <slot></slot>
</a>