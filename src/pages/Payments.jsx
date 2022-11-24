import Dropdown from '@/components/Dropdown'
import Pagination from '@/components/Pagination'
import Payment from '@/components/Payment'

export default function Payments() {
  return (
    <section class="payments rounded-lg md:bg-zinc-50 md:px-7 md:pt-5 md:pb-7 md:shadow-shifted">
      <div className="mb-7">
        <h2 className="font-display text-2xl font-bold leading-none -tracking-tighter md:text-3xl">
          Мои платежи
        </h2>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-5 sm:flex-nowrap">
        <div className="grid grow auto-cols-fr grid-flow-col gap-2 sm:gap-4">
          <a
            href="#"
            className="active flex min-h-11 grow items-center justify-center rounded bg-white py-2 px-4 text-center transition hover:bg-primary-50 [&.active]:bg-primary-500 [&.active]:text-white"
          >
            Оплаченные
          </a>
          <a
            href="#"
            className="flex min-h-11 grow items-center justify-center rounded bg-white py-2 px-4 text-center transition hover:bg-primary-50 [&.active]:bg-primary-500 [&.active]:text-white"
          >
            Не оплаченные
          </a>
        </div>
        <Dropdown
          className="ml-auto"
          summary={'Сортировка по дате'}
          items={['Сначала новые записи', 'Сначала старые записи']}
        />
      </div>

      <div className="">
        <Payment
          name="Психиатрическое освидетельствование"
          date="17 ноября 2022"
          price="2500 ₽"
        />
        <Payment
          name="Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: синтетическое тестирование играет определяющее"
          date="04 сентября 2022"
          price="1700 ₽"
        />
        <Payment
          name="Разнообразный и богатый опыт говорит нам, что внедрение."
          date="09 мая 2022"
          price="900 ₽"
        />
        <Payment
          name="Принимая во внимание показатели успешности, постоянный количественный рост и сфера нашей активности."
          date="22 февраля 2022"
          price="4500 ₽"
        />
        <Payment
          name="Психиатрическое освидетельствование"
          date="17 ноября 2022"
          price="2500 ₽"
        />
        <Payment
          name="Разнообразный и богатый опыт говорит нам, что внедрение."
          date="09 мая 2021"
          price="900 ₽"
        />
        <Payment
          name="Разнообразный и богатый опыт говорит нам, что внедрение."
          date="09 мая 2022"
          price="900 ₽"
        />
        <Payment
          name="Принимая во внимание показатели успешности, постоянный количественный рост и сфера нашей активности."
          date="22 февраля 2022"
          price="4500 ₽"
        />
        <Payment
          name="Психиатрическое освидетельствование"
          date="17 ноября 2022"
          price="2500 ₽"
        />
        <Payment
          name="Разнообразный и богатый опыт говорит нам, что внедрение."
          date="09 мая 2021"
          price="900 ₽"
        />
      </div>
      <Pagination />
    </section>
  )
}
