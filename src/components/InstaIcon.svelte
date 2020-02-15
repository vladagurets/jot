<script>
  import src from 'public/insta.png'
  import { isIOS, isAndroid } from 'src/utils'

  const getLink = () => {
    if (isIOS()) {
      return 'instagram://user?username=justonetattoostudio'
    } else if (isAndroid()) {
      return 'intent://instagram.com/_u/justonetattoostudio/#Intent;package=com.instagram.android;scheme=https;end'
    } else {
      return 'https://www.instagram.com/justonetattoostudio'
    }
  }
</script>

<style>
  div {
    width: 100%;
    position: absolute;
    top: 40px;
    text-align: center;
    opacity: .9;
    z-index: 1;
  }
  a {
    cursor: pointer;
  }
  img {
    width: 1.5em;
    height: 1.5em;
  }
</style>

<div>
  <a target='_blank' href={getLink()}>
    <img {src} alt='Instagram Just One Tattoo' />
  </a>
</div>