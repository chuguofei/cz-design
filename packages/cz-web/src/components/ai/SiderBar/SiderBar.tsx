import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'AISiderBar',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const siderBar = ref([
      {
        label: '广场',
        key: '/ai/plaza',
      },
      {
        label: 'AI工具',
        key: '/ai/tools',
      },
      {
        label: '我的空间',
        key: '/ai/my',
      },
    ])

    const handleRouterTo = (path: string) => {
      router.push(path)
    }

    const render = () => {
      return (
        <>
          <nav class="w-48 border h-full bg-white">
            <ul>
              {siderBar.value.map((item) => {
                return (
                  <li
                    key={item.key}
                    // @ts-ignore
                    onClick={() => handleRouterTo(item.key)}
                    class={`${item.key === route.path ? 'bg-primary-default text-white' : ''}
                     w-11/12 flex items-center justify-center py-2 transition cursor-pointer mx-auto mt-2 rounded-md`}
                  >
                    <span class="text-center">{item.label}</span>
                  </li>
                )
              })}
            </ul>
          </nav>
        </>
      )
    }

    return {
      render,
    }
  },
  render() {
    return this.render()
  },
})
