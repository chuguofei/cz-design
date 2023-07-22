import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  inheritAttrs: false,
  props: {},
  emits: {},
  setup() {
    const render = () => {
      return <div>das</div>
    }

    return {
      render,
    }
  },
  render() {
    return this.render()
  },
})
