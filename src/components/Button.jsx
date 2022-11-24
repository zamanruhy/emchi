import { splitProps, mergeProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

export default function Button(props) {
  props = mergeProps({ as: 'button' }, props)
  const [, rest] = splitProps(props, [
    'class',
    'classList',
    'as',
    'variant',
    'size',
    'disabled',
    'children',
    'href'
  ])

  return (
    <Dynamic
      component={props.as}
      class="button relative inline-flex cursor-pointer items-center justify-center text-center align-middle transition"
      classList={{
        [props.class]: Boolean(props.class),
        ...props.classList,
        'bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-600':
          props.variant === 'primary' && !props.disabled,
        'text-primary-500 hover:bg-primary-500 hover:text-white border border-primary-500 active:bg-primary-600 active:text-white active:border-primary-600':
          props.variant === 'secondary' && !props.disabled,
        'text-zinc-500 bg-zinc-300 pointer-events-none': props.disabled,
        'min-h-[45px] py-1 px-5 text-base rounded': props.size === 'md'
      }}
      href={props.disabled ? null : props.href}
      disabled={props.disabled}
      {...rest}
    >
      {props.children}
    </Dynamic>
  )
}
