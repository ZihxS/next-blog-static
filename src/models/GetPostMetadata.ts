import { PostMetadata } from "./interfaces/PostMetadata"
import fs from 'fs'
import matter from 'gray-matter'

const GetPostMetadata = (): PostMetadata[] => {
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

  export default GetPostMetadata