import ShieldIcon from '../icons/shield.svg?component'

export default function Payment({ name, date, price }) {
  return (
    <article className="payment grid grid-cols-[12px_repeat(2,minmax(0,1fr))] gap-x-7 gap-y-5 py-4 px-5 odd:bg-primary-500/5 sm:grid-cols-[56%_2fr_1fr]">
      <h3 className="col-span-full flex items-start sm:col-end-auto">
        <span className="mr-5 -mt-px flex w-5 shrink-0 justify-center">
          <ShieldIcon className=" h-5 fill-current" />
        </span>
        {name}
      </h3>
      <time className="col-start-2 sm:col-start-auto">{date}</time>
      <span className="">{price}</span>
    </article>
  )
}
