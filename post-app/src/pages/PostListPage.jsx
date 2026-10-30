import { useEffect } from "react"
import { fetchPosts } from "../api/postApi"

function PostListPage () {

    useEffect(()=>{
        fetchPosts()
    }, [])

    return (
        <>
            PostListPage
        </>
    )
}

export default PostListPage