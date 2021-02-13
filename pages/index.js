import Header from '../components/header'
import Layout from '../components/layout'
import LoginFirebase from '../organisms/login-firebase'

function HomePage() {
  return (
    <>
      <Layout title="Login | Xerorama">
        <Header />
        <LoginFirebase />
      </Layout>
    </>
  )
}

export default HomePage
