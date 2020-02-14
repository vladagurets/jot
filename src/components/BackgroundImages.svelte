<script>
  import { curUser } from 'src/store' 
  import { getMember } from 'src/utils'

  $: bg = ($curUser && getMember($curUser).bg) || null
</script>

<style>
  div {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .25;
    background-size: cover;
    filter: blur(1px);
  }
</style>

<div style={`background-image: url(${bg});`} />
