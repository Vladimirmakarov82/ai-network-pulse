import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export default function ThreadsCallback() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get("code")

  useEffect(() => {
    if (code) console.log(code)
  }, [code])

  return <div>Threads authorization successful</div>
}
