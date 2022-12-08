import { Post } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./states/post";

export interface AppStore {
    post: Post[];
}

export default configureStore<AppStore>({
    reducer: {
        post: postSlice.reducer
    }
})