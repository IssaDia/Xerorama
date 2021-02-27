import { useState } from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Login from '../organisms/login'
import Signup from '../organisms/signup'

function HomePage(props) {
  console.log(props)
  const [isActive, setIsActive] = useState(false)
  console.log(isActive)

  const handleCallback = (childData) => {
    setIsActive(childData)
  }

  return (
    <>
      <Layout title="Login | Xerorama">
        <Header />
        <div
          className={`contain mx-auto mt-24 bg-white rounded-lg relative overflow-hidden	max-w-full min-h-screen shadow-md ${
            isActive && 'right-panel-active'
          }`}>
          <Login parentCallback={handleCallback} />
          <Signup />
        </div>
      </Layout>
    </>
  )
}

export default HomePage
