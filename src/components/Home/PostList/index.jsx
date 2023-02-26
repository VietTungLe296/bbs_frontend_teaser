import React from "react";
import PostItem from "./PostItem";
import './styles.css';

const PostList = ({ posts }) => (
	<div className="postList-wrapper">
		{posts.map((post) => (
			<PostItem post={post} key={post.id}/>
		))}
	</div>
);

export default PostList;
