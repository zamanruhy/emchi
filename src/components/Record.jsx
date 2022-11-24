import DoctorIcon from '../icons/doctor.svg?component'
import CalendarIcon from '../icons/calendar.svg?component'
import PinIcon from '../icons/pin.svg?component'

export default function Record(props) {
  return (
    <article
      className="record relative grid overflow-hidden rounded-lg border border-transparent shadow-shifted sm:grid-cols-2 [&.active]:border-success-500 [&.active]:pt-11 sm:[&.active]:!pt-0"
      classList={{ active: props.active }}
    >
      <div className="absolute inset-x-0 top-0 hidden h-11 bg-success-500 text-white sm:inset-y-0 sm:left-0 sm:h-auto sm:w-11 [.active_&]:block">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:-rotate-90">
          Сегодня
        </span>
      </div>

      <div className="grid gap-6 py-5 px-5 sm:pl-16">
        <span className="flex items-center gap-5">
          <i className="flex w-5 items-center justify-center">
            <DoctorIcon className="h-5 shrink-0 fill-current" />
          </i>
          Прием врача-терапевта
        </span>
        <span className="flex items-center gap-5">
          <i className="flex w-5 items-center justify-center">
            <CalendarIcon className="h-5 shrink-0 fill-current" />
          </i>
          14 ноября 2022, в 10:30
        </span>
        <span className="flex items-center gap-5">
          <i className="flex w-5 items-center justify-center">
            <PinIcon className="h-5 shrink-0 fill-current" />
          </i>
          Ленина 24, каб. 102
        </span>
      </div>

      <div className="border-t border-primary-500/10 py-5 px-5 sm:border-l sm:border-t-0">
        <dl className="grid grid-cols-[fit-content(46%)_minmax(0,1fr)] gap-y-6 gap-x-5">
          <dt className="opacity-50">Лечащий врач:</dt>
          <dd>Петрова А.Б.</dd>

          <dt className="opacity-50">Для приема:</dt>
          <dd>Паспорт, СНИЛС</dd>

          <dt className="opacity-50">Телефон:</dt>
          <dd>
            <a href="tel:+7(3012)37-99-20">+7 (3012) 37-99-20</a>
          </dd>
        </dl>
      </div>
    </article>
  )
}
