<script>
  import { curUser } from 'src/store' 
  import { getMember } from 'src/utils'

  $: bg = getMember($curUser).bg

  const getScale = () => Math.random() > 0.5 ? 1 : -1
</script>

<style>
  div {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .25;
    filter: blur(1px);
    background-size: cover;
    background-repeat: repeat;
  }
</style>

<div style={`
  background-image: url(${bg});
  transform: scale(${getScale()}, ${getScale()});
`} />
