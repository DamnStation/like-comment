import InputNewPost from "./components/InputNewPost"
import Layout from "./components/Layout/Layout"
import Profile from "./components/Profile"
import Post from "./components/Post"
import { usePosts } from "./hooks/usePosts"
import { useUsers } from "./hooks/useUsers"

const App = () => {

  const { posts } = usePosts()
  const { users } = useUsers()
  return (
    <Layout>
      <div className="flex space-x-8 w-4/6 z-10 py-14 ">
        <Profile {...users} />
        <div className="flex flex-col w-[838px] max-h-[1362px]  ">
          <InputNewPost />
          {posts.map((post) => (<Post key={post.Id} {...post} />))}
        </div>
      </div>
    </Layout>
  )
}

export default App
