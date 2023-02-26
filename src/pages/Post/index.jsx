import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { postList } from "../../config/data"
import EmptyList from "../../components/common/EmptyList"
import "./styles.css"

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    let post = postList.find(post => post.id === parseInt(id))
    if (post) {
      setPost(post)
    }
  }, [id])

  return (
    <div>
      <Link className='post-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {post ? (
        <div className='post-wrap'>
          <header>
            <p className='post-date'>Published {post.createdAt}</p>
            <h1>{post.title}</h1>
            <h2>{post.authorName}</h2>
          </header>
          <img src={post.cover} alt='cover' />
          <p className='post-desc'>{post.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  )
}

export default Post
