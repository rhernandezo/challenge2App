import { Post } from '@/models';
import { addPost } from '@/redux/states/post';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function PostForm() {

  const initialState = {
    name: '',
    description: ''
  }

  const [postForm, setPostForm] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostForm({...postForm, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (postForm.name && postForm.description) {
      const res = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postForm)
      });
  
      const postCreated = ([await res.json()]) as Post[];
  
      dispatch(addPost(postCreated));
  
      setPostForm(initialState);
    }
  }

  return (
    <div className='p-4'>
      <form className='flex gap-4 item-center justify-between' onSubmit={handleSubmit}>
        <input className='w-24 h-8' type="text" placeholder="Name" name="name" onChange={handleChange} value={postForm.name} />
        <input className='h-8 flex-1' type="text" placeholder="Description" name="description" onChange={handleChange} value={postForm.description} />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default PostForm;