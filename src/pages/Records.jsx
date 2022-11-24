import Dropdown from '@/components/Dropdown'
import Pagination from '@/components/Pagination'
import Record from '@/components/Record'
import BellIcon from '../icons/bell.svg?component'

export default function Records() {
  return (
    <section class="records rounded-lg md:bg-zinc-50 md:px-7 md:pt-7 md:pb-7 md:shadow-shifted">
      <div className="mb-7 flex flex-wrap gap-x-7 gap-y-7 md:flex-nowrap">
        <h2 className="mr-auto font-display text-2xl font-bold leading-none -tracking-tighter md:text-3xl">
          Мои записи
        </h2>
        <div className="-mt-2 flex w-full items-center rounded bg-success-500 py-4 px-6 text-white sm:max-w-[370px]">
          <BellIcon className="mr-3.5 w-4 shrink-0 fill-current" />
          Сегодня у вас одна запись к врачу 14.11.2022, в 10:30
        </div>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-5 sm:flex-nowrap">
        <div className="grid grow auto-cols-fr grid-flow-col gap-2 sm:gap-4">
          <a
            href="#"
            className="active flex min-h-11 grow items-center justify-center rounded bg-white py-2 px-4 text-center transition hover:bg-primary-50 [&.active]:bg-primary-500 [&.active]:text-white"
          >
            Все записи
          </a>
          <a
            href="#"
            className="flex min-h-11 grow items-center justify-center rounded bg-white py-2 px-4 text-center transition hover:bg-primary-50 [&.active]:bg-primary-500 [&.active]:text-white"
          >
            Несостоявшиеся записи
          </a>
        </div>
        <Dropdown
          className="ml-auto"
          summary={'Сортировка по дате'}
          items={['Сначала новые записи', 'Сначала старые записи']}
        />
      </div>

      <div className="grid gap-7">
        <Record active />
        <Record />
        <Record />
        <Record />
        <Record />
      </div>
      <Pagination />
    </section>
  )
}
