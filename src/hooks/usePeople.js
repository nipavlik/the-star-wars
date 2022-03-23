import axios from 'axios'
import { useState } from 'react'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

function usePeople() {

  const [pageIndex, setPageIndex] = useState(1)

  const { data, error } = useSWR(`https://swapi.dev/api/people/?page=${pageIndex}`, fetcher)

  const onNext = () => {
    if(data.next) setPageIndex(pageIndex + 1)
  }

  const onBack = () => {
    if(data.previous) setPageIndex(pageIndex - 1)
  }

  return {
    people: data,
    isLoading: !error && !data,
    isError: error,
    onBack,
    onNext
  }
}

export default usePeople