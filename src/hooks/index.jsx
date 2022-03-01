import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null)

  async function fetchData() {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {fetchData()}, [url])

  return data
}

