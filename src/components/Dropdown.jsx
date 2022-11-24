import { onMount } from 'solid-js'
import CaretIcon from '../icons/caret.svg?component'

function script() {
  const els = Array.from(document.querySelectorAll('.dropdown'))
  if (!els.length) return

  els.forEach((el) => {
    function onClickOut(e) {
      if (!el.contains(e.target)) {
        el.open = false
      }
    }
    el.addEventListener('toggle', (e) => {
      if (el.open) {
        window.addEventListener('click', onClickOut)
      } else {
        window.removeEventListener('click', onClickOut)
      }
    })
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Dropdown(props) {
  onMount(script)
  return (
    <details
      className="dropdown group relative z-[3000] open:drop-shadow"
      classList={{ [props.className]: Boolean(props.className) }}
    >
      <summary
        className="flex cursor-pointer items-center whitespace-nowrap
      rounded-t px-5 py-3 transition-[color] hover:text-primary-600 group-open:bg-white"
      >
        {props.summary}
        <CaretIcon className="relative top-0.5 ml-3 h-2 shrink-0 fill-current group-open:top-0 group-open:rotate-180" />
      </summary>
      <div className="absolute top-full min-w-full rounded-b bg-white pb-2">
        {props.items.map((item, i) => (
          <a
            href="#"
            className="block py-1.5 px-5 text-xs transition-[color] hover:text-primary-400 [&.active]:font-extrabold"
            classList={{ active: i === 0 }}
          >
            {item}
          </a>
        ))}
      </div>
    </details>
  )
}
