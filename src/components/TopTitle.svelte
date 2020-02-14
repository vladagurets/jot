<script>
  import Translator from 'src/components/Translator'
  import { curUser } from 'src/store' 
  import { getMember } from 'src/utils'

  $: title = ($curUser && getMember($curUser).name) || 'criminal'
</script>
<style>
  div {
    position: absolute;
    width: 100%;
    font-family: 'Fugaz One', cursive;
    padding: 45px 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.8rem;
    text-shadow: var(--font-shadow-top-bottom);
  }
  i {
    text-transform: uppercase;
  }
</style>
<div>
  — <i><Translator key={title} /></i> —
</div>