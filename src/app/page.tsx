import { PostMetadata } from '@/models/PostMetadata'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

const getPostMetadata = (): PostMetadata[] => {
  const files = fs.readdirSync("posts/")
  const markdownPosts = files.filter((file) => file.endsWith(".md"))

  const posts = markdownPosts.map((file) => {
    const fileContents = fs.readFileSync(`posts/${file}`, 'utf-8')
    const matterResult = matter(fileContents)

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: file.replace(".md", "")
    }
  })

  return posts
}

const Home = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => {
    return (
      <div>
        <Link href={`/${post.slug}`}>
          <h2>{post.slug}</h2>
        </Link>
        <p>{post.subtitle}</p>
        <p>{post.date}</p>
      </div>
    )
  })

  return <div>{postPreviews}</div>
}

export default Home