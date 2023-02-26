import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

function PostItem(props) {
  const { id, content, title, created_at, updated_at, author_name, thumbnail } =
    props.post

  return (
    <Link className='postItem-link' to={`/post/${id}`}>
      <div className='postItem-wrapper'>
        <img className='postItem-thumbnail' src={thumbnail} alt='thumbnail' />
		
        <h3 className='postItem-title'>{title}</h3>

        <p className='postItem-content'>{content}</p>

        <footer>
          <div className='postItem-author'>
            <h6>{author_name}</h6>
            <p>Created at: {created_at}</p>
            <p>Updated at: {updated_at}</p>
          </div>
        </footer>
      </div>
    </Link>
  )
}

export default PostItem
