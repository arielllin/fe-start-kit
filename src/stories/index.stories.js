import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import MyButton from '../components/storyBookSample/MyButton/MyButton.vue'
import myButtonWithTextNote from '../components/storyBookSample/MyButton/MyButtonWithText.md'
import myButtonWithEmojiNote from '../components/storyBookSample/MyButton/MyButtonWithEmoji.md'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }), { notes: { markdown: myButtonWithTextNote }})
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }), { notes: { markdown: myButtonWithEmojiNote }})
