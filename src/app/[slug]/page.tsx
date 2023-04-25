import GetPostMetadata from '@/models/GetPostMetadata'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

const GetContent = (slug: string) => {
    const file = `posts/${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)

    return matterResult
}

const Post = (props: any) => {
    const { slug } = props.params
    const post = GetContent(slug)

    return (
        <>
            <h1>{post.data.title}</h1>
            <Markdown>{post.content}</Markdown>
        </>
    )
}

export const generateStaticParams = async () => {
    const posts = GetPostMetadata()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

export default Post