export const dummy = blogs => 1

export const totalLikes = blogs => {
  const reducer = (sum, blog) => sum + blog.likes
  return blogs.reduce(reducer, 0)
}

export const favoriteBlog = blogs => {
  if (blogs.length === 0) return {}
  const reducer = (favBlog, blog) => blog.likes > favBlog.likes ? blog : favBlog
  return blogs.reduce(reducer, blogs[0])
}

export const mostBlogs = blogs => {
  const authorBlogsCount = {}
  blogs.forEach(blog => authorBlogsCount.hasOwnProperty(blog.author)
    ? authorBlogsCount[blog.author]++ : authorBlogsCount[blog.author] = 1)

  const authorWithMostBlogs = { author: null, blogs: 0 }
  Object.keys(authorBlogsCount).forEach(author => {
    if (authorWithMostBlogs.author === null || authorBlogsCount[author] > authorWithMostBlogs.blogs) {
      authorWithMostBlogs.author = author
      authorWithMostBlogs.blogs = authorBlogsCount[author]
    }
  })
  return authorWithMostBlogs
}

export const mostLikes = blogs => {
  const authorLikesCount = {}
  blogs.forEach(blog => {
    if (authorLikesCount.hasOwnProperty(blog.author)) {
      authorLikesCount[blog.author] += blog.likes
    } else {
      authorLikesCount[blog.author] = blog.likes
    }
  })

  const authorWithMostLikes = { author: null, likes: 0}
  Object.keys(authorLikesCount).forEach(author => {
    if (authorWithMostLikes.author === null || authorLikesCount[author] > authorWithMostLikes.likes) {
      authorWithMostLikes.author = author,
      authorWithMostLikes.likes = authorLikesCount[author]
    }
  })

  return authorWithMostLikes
}