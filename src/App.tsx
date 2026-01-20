import { useState } from "react"
import ChallengeLayout from "./components/Challenge/ChallengeLayout"
import { Layout } from "./components/layout/layout"
import Navbar from "./components/layout/Navbar"
import MobileNavbar from "./components/layout/MobileNavbar"
import { useIsMobile } from "./hooks/useIsMobile"


function App() {
  const isMobile = useIsMobile()
  const [activeDay, setActiveDay] = useState(1)

  return (
    <div className="bg-bg h-screen">
      <Layout>
      {isMobile ? <MobileNavbar active={activeDay} onDayClick={setActiveDay} /> : <Navbar />}
      <ChallengeLayout activeDay={activeDay} setActiveDay={setActiveDay} />
      </Layout>
    </div>
  )
}

export default App
