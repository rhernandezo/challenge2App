import { Post } from "@/models";
import { deletePost } from "@/redux/states/post";
import { useDispatch } from "react-redux";

type ButtonDeletePostProps = {
  postId: number
}

function ButtonDeletePost(props: ButtonDeletePostProps) {

  const postId = props.postId;

  const dispatch = useDispatch();

  const handleClick = async () => {
    const res = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'DELETE'
    });

    const postRemoved = (await res.json()) as Post;

    dispatch(deletePost(postRemoved));
  }

  return (
    <button onClick={handleClick}>Delete</button>
  )
}

export default ButtonDeletePost;