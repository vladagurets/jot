<script>
  import UserCard from 'src/components/UserCard'
  import { getMembers } from 'src/utils'
</script>

<style>
  section {
    display: flex;
  }
</style>

<section>
  {#each getMembers() as member, i}
		<UserCard {member} />
	{/each}
</section>