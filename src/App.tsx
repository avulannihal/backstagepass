import ChallengeLayout from "./components/Challenge/ChallengeLayout"
import { Layout } from "./components/layout/layout"
import Navbar from "./components/layout/Navbar"


function App() {
  return (
    <div className="bg-bg h-screen">
      <Layout>
      <Navbar />
      <ChallengeLayout />
      </Layout>
    </div>
  )
}

export default App
