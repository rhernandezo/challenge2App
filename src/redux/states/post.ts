import { Post } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Post[] = [];

export const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        addPost: (state, action) => {
            const currentPosts = JSON.parse(JSON.stringify(state));

            // TODO: Modificar al resolver la doble carga del componente Post al iniciar
            // Verificación si se encuentra el nuevo post
            if (currentPosts.length) {
                const auxNewPostReversed = action.payload.reverse();

                const postFound = currentPosts
                    .map((p: Post) => p.id)
                    .includes(auxNewPostReversed[0].id);

                if (!postFound) {
                    return [...currentPosts, ...action.payload];
                }

            } else {
                return [...currentPosts, ...action.payload];
            }
        },
        deletePost: (state, action) => {
            const currentPosts = JSON.parse(JSON.stringify(state));

            const auxNewPosts = [...currentPosts];

            const idxPost = auxNewPosts.findIndex((post: Post) => post.id === action.payload.id);

            const postRemove = auxNewPosts.splice(idxPost, 1);

            return auxNewPosts;
        }
    }
});

export const { addPost, deletePost } = postSlice.actions;