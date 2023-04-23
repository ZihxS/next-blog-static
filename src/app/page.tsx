import fs from 'fs'
import Link from 'next/link'

const getPostMetadata = () => {
  const files = fs.readdirSync("posts/")
  const markdownPosts = files.filter((file) => file.endsWith(".md"))
  const slugs = markdownPosts.map((file) => file.replace(".md", ""))

  return slugs
}

const Home = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((slug) => {
      return (
        <Link href={`/${slug}`}>
          <div>
            <h2>{slug}</h2>
          </div>
        </Link>
      )
  })

  return (
    <>
      {postPreviews}
    </>
  )
}


export default Home