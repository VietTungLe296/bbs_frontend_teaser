import React, { useEffect, useState } from "react"
import PostList from "../../components/Home/PostList"
import Header from "../../components/Home/Header"
import SearchBar from "../../components/Home/SearchBar"
import { postList } from "../../config/data"
import EmptyList from "../../components/common/EmptyList"

const Home = () => {
  const [posts, setPosts] = useState(postList)

  const [searchKey, setSearchKey] = useState("")

  const handleSearchSubmit = event => {
    event.preventDefault()
    handleSearchResult()
  }

  const handleSearchResult = () => {
    const allPosts = postList
    const filteredPosts = allPosts.filter(post =>
      post.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    )

    setPosts(filteredPosts)
  }

  const handleClearSearch = () => {
    setPosts(postList)
    setSearchKey("")
  }

  return (
    <div>
      <Header />

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={e => setSearchKey(e.target.value)}
      />

      {!posts.length ? <EmptyList /> : <PostList posts={posts} />}
    </div>
  )
}

export default Home
