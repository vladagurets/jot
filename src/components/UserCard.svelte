<script>
  import Translator from 'src/components/Translator'
  import Link from 'src/components/Link.svelte'
  import { curUser } from 'src/store' 
  export let member

  const onClick = () => {
    curUser.set(member.id)
  }
</script>

<style>
  .root {
    background-color: #ead3bc;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    /* filter: drop-shadow(0 0 10px rgba(0, 0, 0, .5)); */
    height: 280px;
    width: 200px;
    left: 0px;
    margin-left: -50px;
    position: relative;
    transition: .4s ease-out;
  }

  .root:not(:first-child) {
    margin-left: -50px;
  }

  .root:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }

  .root:hover ~ .root {
    position: relative;
    left: 50px;
    transition: .4s ease-out;
  }
  .flex {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="root">
  <Link className="cardLink" page='/crew#{member.id}' {onClick}>
    <div class="flex">
      <Translator key={member.name} />
    </div>
  </Link>
</div>

