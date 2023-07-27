import { defineComponent, onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default defineComponent({
  name: 'AiTools',
  components: { Swiper, SwiperSlide },
  setup() {
    const toolsList = ref([])

    onMounted(() => {
      //   new Swiper('.swiper', {
      //     freeMode: true,
      //     direction: 'horizontal',
      //     observer: true,
      //     observeParents: true,
      //     spaceBetween: 15,
      //     speed: 10,
      //     slidesPerView: 'auto', // 自定义每一个slide的宽度 配合css
      //   })
    })

    return {
      toolsList,
    }
  },
  render() {
    return (
      <>
        <div class="h-56 border rounded-lg">banner</div>
        <div style={{ border: '1px red solid' }}>
          <Swiper
            slidesPerView="auto"
            direction="horizontal"
            spaceBetween={30}
            loop={true}
            observer={true}
            style={{ border: '1px blue solid', width: 'calc(100vw - 200px)' }}
          >
            <swiper-slide class="w-52 h-52">
              <img
                class="w-52 h-52"
                src="https://aigc-pub-prod-cdn-oss.chuangkit.com/tag/入口图列表/AI绘画.png?imageMogr2/format/webp"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-52 h-52"
                src="https://aigc-pub-prod-cdn-oss.chuangkit.com/tag/入口图列表/AI绘画.png?imageMogr2/format/webp"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-52 h-52"
                src="https://aigc-pub-prod-cdn-oss.chuangkit.com/tag/入口图列表/AI绘画.png?imageMogr2/format/webp"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-52 h-52"
                src="https://aigc-pub-prod-cdn-oss.chuangkit.com/tag/入口图列表/AI绘画.png?imageMogr2/format/webp"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-52 h-52"
                src="https://aigc-pub-prod-cdn-oss.chuangkit.com/tag/入口图列表/AI绘画.png?imageMogr2/format/webp"
              />
            </swiper-slide>
          </Swiper>
        </div>
      </>
    )
  },
})
