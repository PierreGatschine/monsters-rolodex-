import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null)

  async function fetchData() {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
  }

  useEffect(() => {fetchData()}, [url])

  return data
}
