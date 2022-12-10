import {useQuery} from '@tanstack/react-query'

const loader = 'https://samherbert.net/svg-loaders/svg-loaders/tail-spin.svg'

export interface Quote {
  _id: string
  content: string
  author: string
  tags: string[]
  authorSlug: string
  length: number
  dateAdded: string
  dateModified: string
}

function getQuote() {
  return fetch('https://api.quotable.io/random').then(
    res => res.json() as Promise<Quote>,
  )
}

export const SexyLoader = () => {
  const {data} = useQuery(['quote'], getQuote, {
    refetchInterval: 10000,
  })

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <img src={loader} alt="tall spin loader" className="w-24 h-24 invert" />
      <div className="mx-auto mt-12 flex max-w-sm flex-col text-center">
        <p className="text-lg">{data?.content}</p>
        <p className="mt-4 font-semibold text-slate-700">{data?.author}</p>
      </div>
    </div>
  )
}
