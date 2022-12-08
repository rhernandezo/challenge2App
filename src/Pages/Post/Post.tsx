import { addPost } from '@/redux/states/post';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PostForm, PostsTable } from './components';

function Post() {

    const dispatch = useDispatch();

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch(`http://localhost:3000/posts`);
            const posts = await res.json();

            dispatch(addPost(posts));
        }

        getPosts()
            .catch(console.error);
    }, []);

    return (
        <>
            <PostsTable />
            <PostForm />
        </>
    )
}

export default Post;