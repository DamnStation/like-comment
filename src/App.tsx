import InputNewPost from "./components/InputNewPost"
import Layout from "./components/Layout/Layout"
import Profile from "./components/Profile"

const App = () => {

  return (
    <Layout>
      <div className="flex space-x-8 w-4/6 z-10 py-14">
        <Profile />
        <div className="flex flex-col w-[838px] h-[1362px]">
          <InputNewPost />
        </div>
      </div>
    </Layout>
  )
}

export default App
