<script>
  import Translator from 'src/components/Translator'
  import Link from 'src/components/Link.svelte'
  import c from 'classnames'
  import { curUser } from 'src/store'
  import cardBg from 'public/grid-pattern-sm.jpg'

  export let member
  export let index
  export let transition
  export let listWidth

  let cardWidth = 180

  $: style = `
    z-index: ${index};
    transform: rotateZ(${-10 + index * 2}deg);
    transition-delay: ${0.01 * index}s;
    background-image: url(${cardBg});
    width: ${cardWidth}px;
    height: ${cardWidth * 1.4}px;
    ${
      transition
        ? `left: ${index * 98}px;`
        : ''
    }
  `.uglify()

  const onClick = () => {
    curUser.set(member.id)
  }
</script>

<style>
  .root {
    box-sizing: border-box;
    background-color: #FFF;
    border-radius: 8px;
    border: 2px solid var(--border-color);
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, .5));

    overflow: hidden;
    position: absolute;
    left: 0px;
    transition: all .8s cubic-bezier(0.63, 0.15, 0.03, 1.12);
  }
  .transition {
    transform: rotateZ(0deg) !important;
  }
  .flex {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .root:hover {
    margin-top: -20px;
    transition: .4s ease-out;
  }

  .root:hover ~ .root {
    margin-left: 70px;
  }
</style>

<div
  class={c('root', {
    'transition': transition,
  })}
  style={style}
>
  <Link className="cardLink" page='/crew#{member.id}' {onClick}>
    <div class="flex">
      <!-- <Translator key={member.name} /> -->
    </div>
  </Link>
</div>

