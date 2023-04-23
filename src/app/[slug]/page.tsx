import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

const getContent = (slug: string) => {
    const file = `posts/${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)

    return matterResult
}

const Post = (props: any) => {
    const { slug } = props.params
    const post = getContent(slug)

    return (
        <>
            <h1>{post.data.title}</h1>
            <Markdown>{post.content}</Markdown>
        </>
    )
}

export default Post