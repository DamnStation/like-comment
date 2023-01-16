import CreateNewPost from "./components/CreateNewPost"
import Layout from "./components/Layout/Layout"
import Profile from "./components/Profile"
import Post from "./components/Post"
import { usePosts } from "./hooks/usePosts"
import { useUsers } from "./hooks/useUsers"
import { useEffect, useState } from "react"

const App = () => {

  const { users } = useUsers()
  const { posts, setPosts } = usePosts()

  useEffect(() => {
    console.log(posts, " from useEffect")
  }, [posts])
  return (
    <Layout>
      <div className="flex flex-1 justify-center m-5 ">
        <div className="flex md:flex-row md:justify-between md:w-[838px]  flex-col ">
          < Profile {...users} />
          <div className="flex flex-col mt-3 md:mt-0">
            <CreateNewPost onCreate={(newPost) => setPosts((prevState) => [newPost, ...prevState])} />
            {posts.map((post, index) => (<Post key={index} {...post} />))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
