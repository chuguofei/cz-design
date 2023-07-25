import { defineComponent, ref, computed, PropType, nextTick } from 'vue'
import { getPrefixCls } from '../../_utils/global-config'
import { Size } from '../../_utils/constant'
import Icon from '../../icon'
import { Close } from '@cz-design/icon'
import { isObject } from '@cz-design/utils'

export default defineComponent({
  name: 'Input',
  inheritAttrs: false,
  props: {
    modelValue: String,
    defaultValue: {
      type: String,
      default: '',
    },
    /**
     * 提示
     */
    placeholder: String,
    /**
     * 组件大小
     */
    size: {
      type: String as PropType<Size>,
      default: 'medium',
    },
    /**
     * 是否清空输入框
     */
    allowClear: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否为只读
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否为禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 文本框类型
     */
    type: {
      type: String as PropType<'text' | 'password'>,
      default: 'text',
    },
    /**
     * 最大输入长度
     */
    maxLength: {
      type: [Number, Object] as PropType<number | { length: number }>,
      default: 0,
    },
    /**
     * 是否显示字数统计
     */
    showWordLimit: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    'update:modelValue': (_value: string) => true,
    /**
     * 输入数据触发
     */
    input: (_value: string, _e: Event) => true,
    /**
     * 回车或失去焦点
     *
     */
    change: (_value: string, _e: Event) => true,
    /**
     * 点击清空调用
     */
    clear: (_e: MouseEvent) => true,
    /**
     * 回车时调用
     */
    pressEnter: (_e: KeyboardEvent) => true,
    /**
     *  获取焦点
     */
    focus: (_e: FocusEvent) => true,
    /**
     *  失去焦点
     */
    blur: (_e: FocusEvent) => true,
  },
  setup(props, { slots, emit }) {
    const inputRef = ref<HTMLInputElement>()
    const prefixCls = getPrefixCls('input')

    const _value = ref(props.defaultValue)
    const computedValue = computed(() => props.modelValue ?? _value.value)
    // 是否正在输入
    const isComposition = ref(false)
    const compositionValue = ref('')

    const focus = ref(false)

    const cls = computed(() => [prefixCls, `${prefixCls}-size-${props.size}`])

    const wrapperCls = computed(() => [
      `${prefixCls}-wrapper`,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-focus`]: focus.value,
      },
    ])

    const maxLength = computed(() =>
      isObject(props.maxLength) ? props.maxLength.length : props.maxLength,
    )

    let preValue = computedValue.value

    const getValueLength = (value: string) => {
      return value.length ?? 0
    }

    // 获取字符长度
    const valueLength = computed(() => getValueLength(computedValue.value))

    const emitChange = (value: string, e: Event) => {
      if (value !== preValue) {
        preValue = value
        emit('change', value, e)
      }
    }

    // 更改值
    const updateValue = (value: string) => {
      if (maxLength.value && valueLength.value > maxLength.value) {
        value = value.slice(0, maxLength.value)
      }
      _value.value = value
      emit('update:modelValue', value)
    }

    const handleComposition = (e: CompositionEvent) => {
      const { value, selectionStart, selectionEnd } = e.target as HTMLInputElement

      // 输入完成
      if (e.type === 'compositionend' && selectionStart === selectionEnd) {
        isComposition.value = false
        compositionValue.value = ''

        updateValue(value)
        emit('input', value, e)
      } else {
        isComposition.value = true
        compositionValue.value = computedValue.value + e.data ?? ''
      }
    }

    const handleInput = (e: Event) => {
      const { value } = e.target as HTMLInputElement
      // 如果输入完成
      if (!compositionValue.value) {
        if (
          maxLength.value &&
          valueLength.value >= maxLength.value &&
          getValueLength(value) > maxLength.value
        ) {
          return
        }

        updateValue(value)
        emit('input', value, e)
      }
    }

    const handleFocus = (e: FocusEvent) => {
      focus.value = true
      preValue = computedValue.value
      emit('focus', e)
    }

    const hanldeBlur = (e: FocusEvent) => {
      focus.value = false
      preValue = computedValue.value
      emitChange(computedValue.value, e)
      emit('blur', e)
    }

    const handleClear = (e: MouseEvent) => {
      updateValue('')
      emitChange('', e)
      emit('clear', e)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const keyCode = e.key || e.code
      if (!isComposition.value && keyCode === 'Enter') {
        emitChange(computedValue.value, e)
        emit('pressEnter', e)
      }
    }

    const renderInput = () => {
      return (
        <>
          <span class={wrapperCls.value}>
            <input
              ref={inputRef}
              class={cls.value}
              value={computedValue.value}
              placeholder={props.placeholder}
              readonly={props.readonly}
              disabled={props.disabled}
              type={props.type}
              onInput={handleInput}
              onCompositionstart={handleComposition}
              onCompositionupdate={handleComposition}
              onCompositionend={handleComposition}
              onKeydown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={hanldeBlur}
            />
            {props.allowClear && (
              <Icon
                // @ts-ignore
                onClick={handleClear}
                class={`${prefixCls}-clear-btn`}
              >
                <Close />
              </Icon>
            )}
          </span>
        </>
      )
    }

    const render = () => {
      return renderInput()
    }

    return {
      render,
    }
  },
  render() {
    return this.render()
  },
})
