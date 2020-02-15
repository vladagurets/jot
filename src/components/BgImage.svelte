<script>
  import { curUser } from 'src/store' 
  import { getMember, getScreenWidth, getScreenHeight, rnd } from 'src/utils'

  const bgSize  = 4000
  const getXBgPosition = () => rnd(bgSize - getScreenWidth())
  const getYBgPosition = () => rnd(bgSize - getScreenHeight())

  $: style = `
    width: ${bgSize}px;
    height: ${bgSize}px;
    background-image: url(${getMember($curUser).bg});
    background-position: -${getXBgPosition()}px -${getYBgPosition()}px;
  `
</script>

<style>
  div {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .5;
    /* filter: blur(1px); */
  }
</style>

<div style={style} />
