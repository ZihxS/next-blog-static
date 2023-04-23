import fs from 'fs'

const getPostMetadata = () => {
  const files = fs.readdirSync("posts/")
  const markdownPosts = files.filter((file) => file.endsWith(".md"))
  const slugs = markdownPosts.map((file) => file.replace(".md", ""))

  return slugs
}

export default function Home() {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((slug) => {
      return (
        <div>
          <h2>{slug}</h2>
        </div>
      )
  })

  return (
    <>
      {postPreviews}
    </>
  )
}
