import CreateNewPost from "./components/CreateNewPost"
import Layout from "./components/Layout/Layout"
import Profile from "./components/Profile"
import Post from "./components/Post"
import { usePosts } from "./hooks/usePosts"
import { useUsers } from "./hooks/useUsers"
import { useEffect, useState } from "react"
import ButtonCusom from "./components/ButtonCustom"

const App = () => {

  const { users } = useUsers()
  const { posts, setPosts } = usePosts()
  const postPerRow = 3;
  const [next, setNext] = useState(postPerRow);

  const handleMoreImage = () => {
    setNext(next + postPerRow);
  };

  useEffect(() => {
    console.log(posts, " from useEffect")
  }, [posts])
  return (
    <Layout>
      <div className="flex flex-1 justify-center m-5 ">
        <div className="flex md:flex-row md:justify-between md:w-[838px] flex-col ">
          < Profile {...users} />
          <div className="flex flex-col mt-3 md:mt-0">
            <CreateNewPost onCreate={(newPost) => setPosts((prevState) => [newPost, ...prevState])} />
            <>{posts
              ?.sort((a, b) => a.dateToSeconds + b.dateToSeconds)
              ?.slice(0, next)
              ?.map((post, index) => (<Post key={index} {...post} />))}</>
            <div className="flex self-center line  "> {next < posts?.length && (
              <ButtonCusom
                buttonText="Load more"
                buttonStyle="flex justify-center py-1 px- w-auto w-[116px] h-[32px] bg-primary-button rounded text-white text-[14px] leading-7 font-semibold gap-2.5"
                onClick={handleMoreImage}
              />
            )}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
