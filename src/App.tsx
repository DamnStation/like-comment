import CreateNewPost from "./components/CreateNewPost"
import Layout from "./components/Layout/Layout"
import Profile from "./components/Profile"
import Post from "./components/Post"
import { usePosts } from "./hooks/usePosts"
import { useUser } from "./hooks/useUser"
import { memo, useState } from "react"
import ButtonCusom from "./components/ButtonCustom"


const App = () => {

  const { user, updateUser } = useUser();
  const { posts, upsertPost, likeDislikePost } = usePosts();

  const postPerRow = 3;

  const [next, setNext] = useState(postPerRow);

  const handleMorePosts = () => {
    setNext(next + postPerRow);
  };

  const onCreate = (newPost: typeof posts[0]) => {
    upsertPost(newPost)
    updateUser({ ...user, posts: user.posts + 1 });
  };

  const onClickLike = (postProp: number, userProp: number) => {
    const addOrRemoveCount = likeDislikePost(postProp, userProp)
    updateUser({ ...user, likes: user.likes + addOrRemoveCount })
  };

  return (
    <Layout>
      <div className="flex flex-1 justify-center m-5 ">
        <div className="flex md:flex-row md:justify-between md:w-[838px] flex-col ">
          <Profile {...user} />
          <div className="flex flex-col mt-3 md:mt-0">
            <CreateNewPost onCreate={onCreate} />
            <>{posts
              ?.sort((a, b) => a.dateToSeconds + b.dateToSeconds)
              ?.slice(0, next)
              ?.map((post, index) => (<Post key={index} onClickLike={(post, user) => { onClickLike(post, user) }} {...post} />))}</>
            <div className="flex self-center">
              {next < posts?.length && (
                <ButtonCusom
                  buttonText="Load more"
                  buttonStyle="flex justify-center py-1 w-[116px] h-[32px] bg-primary-button rounded text-white text-[14px] leading-7 font-semibold gap-2.5"
                  onClick={handleMorePosts}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default memo(App)
