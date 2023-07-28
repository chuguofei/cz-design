import { defineComponent, ref } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper as SwiperType } from 'swiper/types'
import './index.scss'
import { useRouter } from 'vue-router'

type ToolsListType = {
  label: string
  description: string
  route: string
}

export default defineComponent({
  name: 'AiTools',
  components: { Swiper, SwiperSlide },
  setup() {
    const router = useRouter()
    const swiperRef = ref<SwiperType>()
    const toolsListDataSource = ref<ToolsListType[]>([
      {
        label: 'AI 绘画',
        description: '你的创作无限可能',
        route: '/aidesign/txtToImg',
      },
    ])

    const initSwiper = (swiper: SwiperType) => {
      swiperRef.value = swiper
    }

    const handleRouterTo = (item: ToolsListType) => {
      router.push(item.route)
    }

    return {
      swiperRef,
      toolsListDataSource,
      initSwiper,
      handleRouterTo,
    }
  },
  render() {
    return (
      <div class="flex flex-col">
        <div class="h-56 border rounded-lg mb-2">banner</div>
        <div>
          <Swiper
            onSwiper={this.initSwiper}
            modules={[Navigation]}
            slidesPerView="auto"
            direction="horizontal"
            spaceBetween={20}
            slidesPerGroup={3}
            loop={false}
            observer={true}
            noSwiping={false}
            simulateTouch={false}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {this.toolsListDataSource.map((item) => {
              return (
                <swiper-slide key={item.route} style={{ width: '250px' }}>
                  <div
                    onClick={() => this.handleRouterTo(item)}
                    class="rounded-md border overflow-hidden cursor-pointer select-none group"
                  >
                    <div class="h-28 overflow-hidden">
                      <img
                        class="w-full h-full group-hover:scale-[1.1] object-cover transition delay-10"
                        src="https://aigc-pub-prod-cdn-oss.chuangkit.com/tag/入口图列表/AI绘画.png?imageMogr2/format/webp"
                      />
                    </div>
                    <div class="flex flex-col my-2 mx-2 ">
                      <span class="text-sm mb-1">{item.label}</span>
                      <span class="text-xs">{item.description}</span>
                    </div>
                  </div>
                </swiper-slide>
              )
            })}
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </Swiper>
        </div>
      </div>
    )
  },
})
