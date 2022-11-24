import ShieldIcon from '../icons/shield.svg?component'
import WalletIcon from '../icons/wallet.svg?component'
import CalendarIcon from '../icons/calendar.svg?component'
import CaretIcon from '../icons/caret.svg?component'
import Button from './Button'

export default function Service(props) {
  return (
    <article className="service rounded-lg bg-white shadow-shifted">
      <div className="grid sm:grid-cols-[38%_minmax(0,1fr)]">
        <div className="relative aspect-[5/2] sm:aspect-auto">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            alt="#"
            loading="lazy"
            decoding="async"
            className="absolute top-0 left-0 h-full w-full rounded-t-lg object-cover sm:rounded-l-lg"
          />
        </div>

        <div className="p-5">
          <div className="mb-5 flex items-start">
            <span className="mr-5 w-5 shrink-0">
              <ShieldIcon className="h-5 fill-current" />
            </span>
            <h3 className="min-h-[2.3em] break-words text-xl leading-tightest">
              {props.name}
            </h3>
          </div>

          <div className="ml-10 mb-5">
            <p className="font-light">
              Краткое описание процедуры вещь: синтетическое тестирование играет
              определяющее значение для стандартных
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-x-12 gap-y-4 whitespace-nowrap">
            <div className="flex items-center">
              <span className="mr-5 -mt-px w-5 shrink-0">
                <WalletIcon className="h-5 fill-current" />
              </span>
              <span>2500 ₽</span>
            </div>
            <div className="flex items-center">
              <span className="mr-5 w-5 shrink-0">
                <CalendarIcon className="h-5 fill-current" />
              </span>
              <time>14 ноября 2022</time>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-3 gap-x-[7%]">
            <Button type="button" variant="primary" size="md" class="px-4">
              Записаться на прием
            </Button>
            <button
              type="button"
              className="flex items-center whitespace-nowrap px-4 py-2 transition-[color] hover:text-primary-600 [.expanded_&]:hidden"
              onclick="this.closest('article').classList.toggle('expanded')"
            >
              Подробнее
              <CaretIcon className="relative top-px ml-1.5 h-2 fill-current" />
            </button>
          </div>
        </div>
      </div>

      <div class="tabs hidden sm:pt-4 [.expanded_&]:block">
        <div role="tablist" class="flex flex-wrap justify-around">
          <button
            type="button"
            role="tab"
            class="active relative min-w-min max-w-40 border-b border-primary-500 py-3 px-4 text-center text-primary-500/50 transition hover:text-primary-500 sm:max-w-none sm:grow [&.active]:text-primary-500"
          >
            Описание
            <span className="absolute inset-x-0 bottom-0 mb-[-3px] hidden h-[5px] rounded-full bg-primary-500 [.active>&]:block" />
          </button>
          <button
            type="button"
            role="tab"
            class="relative min-w-min max-w-40 border-b border-primary-500 py-3 px-4 text-center text-primary-500/50 transition hover:text-primary-500 sm:max-w-none sm:grow [&.active]:text-primary-500"
          >
            Показания
            <span className="absolute inset-x-0 bottom-0 mb-[-3px] hidden h-[5px] rounded-full bg-primary-500 [.active>&]:block" />
          </button>
          <button
            type="button"
            role="tab"
            class="relative min-w-min max-w-40 border-b border-primary-500 py-3 px-4 text-center text-primary-500/50 transition hover:text-primary-500 sm:max-w-none sm:grow [&.active]:text-primary-500"
          >
            Ограничения
            <span className="absolute inset-x-0 bottom-0 mb-[-3px] hidden h-[5px] rounded-full bg-primary-500 [.active>&]:block" />
          </button>
          <button
            type="button"
            role="tab"
            class="relative min-w-min max-w-40 border-b border-primary-500 py-3 px-4 text-center text-primary-500/50 transition hover:text-primary-500 sm:max-w-none sm:grow [&.active]:text-primary-500"
          >
            Результат
            <span className="absolute inset-x-0 bottom-0 mb-[-3px] hidden h-[5px] rounded-full bg-primary-500 [.active>&]:block" />
          </button>
        </div>
        <div className="[&_p]:font-light [&_p:not(:last-of-type)]:mb-4">
          <div role="tabpanel" class="px-5 pt-5 pb-6">
            <p>
              Кстати, активно развивающиеся страны третьего мира формируют
              глобальную экономическую сеть и при этом — разоблачены.
            </p>
            <p>
              Таким образом, реализация намеченных плановых заданий влечет за
              собой процесс внедрения и модернизации поставленных обществом
              задач. Сложно сказать, почему элементы политического процесса
              формируют глобальную экономическую сеть и при этом — подвергнуты
              целой серии независимых исследований.
            </p>
            <p>
              Принимая во внимание показатели успешности, начало повседневной
              работы по формированию позиции, а также свежий взгляд на привычные
              вещи — безусловно открывает новые горизонты для направлений
              прогрессивного развития.
            </p>
            <p>
              Наше дело не так однозначно, как может показаться: сложившаяся
              структура организации предполагает независимые способы реализации
              дальнейших направлений развития. Внезапно, предприниматели в сети
              интернет и по сей день остаются уделом либералов, которые жаждут
              быть обнародованы.
            </p>
            <p>
              В своём стремлении повысить качество жизни, они забывают, что
              граница обучения кадров однозначно фиксирует необходимость модели
              развития. Как уже неоднократно упомянуто, многие известные
              личности.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-4">
              <div className="grow" />
              <button
                type="button"
                className="flex items-center whitespace-nowrap px-4 py-2 transition-[color] hover:text-primary-600"
                onclick="this.closest('article').classList.toggle('expanded')"
              >
                Свернуть описание
                <CaretIcon className="relative top-px ml-1.5 h-2 rotate-180 fill-current" />
              </button>
            </div>
          </div>
          <div role="tabpanel" class="hidden px-5 pt-5 pb-6">
            <p>
              Кстати, активно развивающиеся страны третьего мира формируют
              глобальную экономическую сеть и при этом — разоблачены.
            </p>
            <p>
              Таким образом, реализация намеченных плановых заданий влечет за
              собой процесс внедрения и модернизации поставленных обществом
              задач. Сложно сказать, почему элементы политического процесса
              формируют глобальную экономическую сеть и при этом — подвергнуты
              целой серии независимых исследований.
            </p>
            <p>
              Принимая во внимание показатели успешности, начало повседневной
              работы по формированию позиции, а также свежий взгляд на привычные
              вещи — безусловно открывает новые горизонты для направлений
              прогрессивного развития.
            </p>
            <p>
              Наше дело не так однозначно, как может показаться: сложившаяся
              структура организации предполагает независимые способы реализации
              дальнейших направлений развития. Внезапно, предприниматели в сети
              интернет и по сей день остаются уделом либералов, которые жаждут
              быть обнародованы.
            </p>
            <p>
              В своём стремлении повысить качество жизни, они забывают, что
              граница обучения кадров однозначно фиксирует необходимость модели
              развития. Как уже неоднократно упомянуто, многие известные
              личности.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-4">
              <div className="grow" />
              <button
                type="button"
                className="flex items-center whitespace-nowrap px-4 py-2 transition-[color] hover:text-primary-600"
                onclick="this.closest('article').classList.toggle('expanded')"
              >
                Свернуть описание
                <CaretIcon className="relative top-px ml-1.5 h-2 rotate-180 fill-current" />
              </button>
            </div>
          </div>
          <div role="tabpanel" class="hidden px-5 pt-5 pb-6">
            <p>
              Кстати, активно развивающиеся страны третьего мира формируют
              глобальную экономическую сеть и при этом — разоблачены.
            </p>
            <p>
              Таким образом, реализация намеченных плановых заданий влечет за
              собой процесс внедрения и модернизации поставленных обществом
              задач. Сложно сказать, почему элементы политического процесса
              формируют глобальную экономическую сеть и при этом — подвергнуты
              целой серии независимых исследований.
            </p>
            <p>
              Принимая во внимание показатели успешности, начало повседневной
              работы по формированию позиции, а также свежий взгляд на привычные
              вещи — безусловно открывает новые горизонты для направлений
              прогрессивного развития.
            </p>
            <p>
              Наше дело не так однозначно, как может показаться: сложившаяся
              структура организации предполагает независимые способы реализации
              дальнейших направлений развития. Внезапно, предприниматели в сети
              интернет и по сей день остаются уделом либералов, которые жаждут
              быть обнародованы.
            </p>
            <p>
              В своём стремлении повысить качество жизни, они забывают, что
              граница обучения кадров однозначно фиксирует необходимость модели
              развития. Как уже неоднократно упомянуто, многие известные
              личности.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-4">
              <div className="grow" />
              <button
                type="button"
                className="flex items-center whitespace-nowrap px-4 py-2 transition-[color] hover:text-primary-600"
                onclick="this.closest('article').classList.toggle('expanded')"
              >
                Свернуть описание
                <CaretIcon className="relative top-px ml-1.5 h-2 rotate-180 fill-current" />
              </button>
            </div>
          </div>
          <div role="tabpanel" class="hidden px-5 pt-5 pb-6">
            <p>
              Кстати, активно развивающиеся страны третьего мира формируют
              глобальную экономическую сеть и при этом — разоблачены.
            </p>
            <p>
              Таким образом, реализация намеченных плановых заданий влечет за
              собой процесс внедрения и модернизации поставленных обществом
              задач. Сложно сказать, почему элементы политического процесса
              формируют глобальную экономическую сеть и при этом — подвергнуты
              целой серии независимых исследований.
            </p>
            <p>
              Принимая во внимание показатели успешности, начало повседневной
              работы по формированию позиции, а также свежий взгляд на привычные
              вещи — безусловно открывает новые горизонты для направлений
              прогрессивного развития.
            </p>
            <p>
              Наше дело не так однозначно, как может показаться: сложившаяся
              структура организации предполагает независимые способы реализации
              дальнейших направлений развития. Внезапно, предприниматели в сети
              интернет и по сей день остаются уделом либералов, которые жаждут
              быть обнародованы.
            </p>
            <p>
              В своём стремлении повысить качество жизни, они забывают, что
              граница обучения кадров однозначно фиксирует необходимость модели
              развития. Как уже неоднократно упомянуто, многие известные
              личности.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-3 gap-y-4">
              <Button
                as="a"
                href="#"
                variant="secondary"
                size="md"
                class="px-7"
              >
                Скачать результат
              </Button>
              <div className="grow" />
              <button
                type="button"
                className="flex items-center whitespace-nowrap px-4 py-2 transition-[color] hover:text-primary-600"
                onclick="this.closest('article').classList.toggle('expanded')"
              >
                Свернуть описание
                <CaretIcon className="relative top-px ml-1.5 h-2 rotate-180 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
