import GreenCandyTheme from 'greencandy'
import 'greencandy/styles'
import Home from '../components/Home.vue'

export default {
  ...GreenCandyTheme,
  enhanceApp(ctx) {
    GreenCandyTheme.enhanceApp?.(ctx)
    ctx.app.component('Home', Home)
  }
}
