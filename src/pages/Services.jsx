import { onMount } from 'solid-js'
import Dropdown from '@/components/Dropdown'
import Pagination from '@/components/Pagination'
import Service from '@/components/Service'

function script() {
  const els = Array.from(document.querySelectorAll('.tabs'))
  if (!els.length) return

  els.forEach((el) => {
    const tabEls = Array.from(el.querySelectorAll('[role="tab"]'))
    const panelEls = el.querySelectorAll('[role="tabpanel"]')

    tabEls.forEach((tabEl) => {
      tabEl.addEventListener('click', (e) => {
        const index = tabEls.indexOf(tabEl)
        tabEls.forEach((n) => n.classList.remove('active'))
        panelEls.forEach((n) => n.classList.add('hidden'))
        tabEl.classList.add('active')
        panelEls[index].classList.remove('hidden')
        window.dispatchEvent(new CustomEvent('resize'))
      })
    })
  })
}

if (import.meta.env.PROD && !import.meta.env.SSR) {
  script()
}

export default function Services() {
  onMount(script)
  return (
    <section class="services rounded-lg md:bg-zinc-50 md:px-7 md:pt-5 md:pb-7 md:shadow-shifted">
      <div className="mb-7">
        <h2 className="font-display text-2xl font-bold leading-none -tracking-tighter md:text-3xl">
          Мои услуги
        </h2>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-5 sm:flex-nowrap">
        <div className="grid grow auto-cols-fr grid-flow-col gap-2 sm:gap-4">
          <a
            href="#"
            className="active flex min-h-11 grow items-center justify-center rounded bg-white py-2 px-4 text-center transition hover:bg-primary-50 [&.active]:bg-primary-500 [&.active]:text-white"
          >
            Все услуги
          </a>
          <a
            href="#"
            className="flex min-h-11 grow items-center justify-center rounded bg-white py-2 px-4 text-center transition hover:bg-primary-50 [&.active]:bg-primary-500 [&.active]:text-white"
          >
            Мои услуги
          </a>
        </div>
        <Dropdown
          className="ml-auto"
          summary={'Сортировка по дате'}
          items={['Сначала новые записи', 'Сначала старые записи']}
        />
      </div>

      <div className="grid gap-8">
        <Service name="Водительская справка 003-в/у" />
        <Service name="Психиатрическое освидетельствование" />
        <Service name="Допуск к государственной тайне" />
      </div>
      <Pagination />
    </section>
  )
}
