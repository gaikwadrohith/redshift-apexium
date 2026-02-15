import Filters from "../components/Legends/Filters"
import LegendsGrid from "../components/Legends/LegendsGrid"
import CTA from "../components/Legends/CTA"
import { useEffect } from "react"

const Legends = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Filters />
      <LegendsGrid />
      <CTA />
    </>
  )
}

export default Legends