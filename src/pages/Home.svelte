<script>
  import { onMount } from 'svelte'
  import UserCard from 'src/components/UserCard'
  import { getMembers } from 'src/utils'

  let transition = false
  let listWidth = 600

  const firstGroup = getMembers().slice(0, 5)
  const secondGroup = getMembers().slice(5, 10) 

  $: listStyle = `width: ${listWidth}px`

  onMount(() => {
    setTimeout(() => {
      transition = true
    }, 200);
  })
</script>

<style>
section {
  width: 100%;
}
  ul {
    list-style-type: none;
    position: relative;
    padding: 20px 0;
    cursor: pointer;
    height: 280px;
    margin: 0 auto;
  }
</style>

<section>
  <ul style={listStyle}>
    {#each firstGroup as member, index}
      <UserCard {member} {index} {listWidth} {transition} />
    {/each}
  </ul>
  <ul style={listStyle}>
    {#each secondGroup as member, index}
      <UserCard {member} {index} {listWidth} {transition} />
    {/each}
  </ul>
</section>