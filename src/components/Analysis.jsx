import ShieldIcon from '../icons/shield.svg?component'
import DoctorIcon from '../icons/doctor.svg?component'
import PinIcon from '../icons/pin.svg?component'
import WalletIcon from '../icons/wallet.svg?component'
import CaretIcon from '../icons/caret.svg?component'
import Button from './Button'

export default function Analysis() {
  return (
    <details className="analysis group overflow-hidden rounded-lg border border-transparent bg-white shadow-shifted open:border-success-500">
      <summary className="flex cursor-pointer items-center py-5 pl-5 pr-5 group-open:bg-success-500 group-open:text-white sm:pr-7">
        <div className="flex grow flex-col gap-x-6 gap-y-4 sm:flex-row sm:items-center">
          <div className="flex items-start break-words sm:w-7/12">
            <span className="mr-5 -mt-px w-5 shrink-0">
              <ShieldIcon className="h-5 fill-current" />
            </span>
            Психиатрическое освидетельствование
          </div>
          <time className="ml-10 grow sm:ml-0 sm:text-center">
            10 ноября 2022, в 10:00
          </time>
        </div>
        <CaretIcon className="ml-5 h-2 shrink-0 fill-current group-open:top-0 group-open:rotate-180" />
      </summary>
      <div className="grid sm:grid-cols-2">
        <div className="flex flex-col items-start px-5 pb-7 pt-7 sm:pb-5">
          <div className="mb-9 grid gap-7">
            <span className="flex items-center gap-5">
              <i className="flex w-5 items-center justify-center">
                <DoctorIcon className="h-5 shrink-0 fill-current" />
              </i>
              Лечащий врач: Сидоров К.Р.
            </span>
            <span className="flex items-center gap-5">
              <i className="flex w-5 items-center justify-center">
                <PinIcon className="h-5 shrink-0 fill-current" />
              </i>
              Ленина 24, каб. 204
            </span>
            <span className="flex items-center gap-5">
              <i className="flex w-5 items-center justify-center">
                <WalletIcon className="h-5 shrink-0 fill-current" />
              </i>
              2500 ₽
            </span>
          </div>
          <div className="mt-auto">
            <Button as="a" href="#" variant="primary" size="md">
              Записаться на прием
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start border-t border-primary-500/10 px-6 pb-7 pt-7 sm:border-t-0 sm:border-l sm:pb-5">
          <div className="mb-3">Результат:</div>
          <p className="mb-7 font-light">
            Таким образом, социально-экономическое развитие создаёт предпосылки
            для приоретизации разума над эмоциями. С другой стороны, выбранный
            нами инновационный путь говорит о возможностях благоприятных
            перспектив. А ещё непосредственные участники технического прогресса
            являются только методом политического участия и объединены в целые
            кластеры себе.
          </p>
          <div className="mt-auto">
            <Button as="a" href="#" variant="secondary" size="md">
              Скачать результат
            </Button>
          </div>
        </div>
      </div>
    </details>
  )
}
