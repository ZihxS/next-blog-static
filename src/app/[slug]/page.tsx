import GetPostMetadata from '@/models/GetPostMetadata'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

import { notFound } from "next/navigation"

const GetContent = (slug: string) => {
    const file = `posts/${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)

    return matterResult
}

const Post = (props: any) => {
    const { slug } = props.params

    if (!fs.existsSync(`posts/${slug}.md`)) {
        notFound()
    }

    const post = GetContent(slug)

    return (
        <>
            <div className='text-center'>
                <h1 className='text-2xl text-slate-700'>{post.data.title}</h1>
                <p className='text-slate-400 mt-2'>{post.data.date}</p>
            </div>
            <article className='prose mt-6 border-t border-slate-400'>
                <Markdown>{post.content}</Markdown>
            </article>
        </>
    )
}

export async function generateMetadata(props: any) {
    const { slug } = props.params

    let dynamicTitle = slug
    let dynamicDescription = slug

    if (fs.existsSync(`posts/${slug}.md`)) {
        const post = GetContent(slug)

        dynamicTitle = post.data.title
        dynamicDescription = post.data.subtitle
    }

    return {
      title: `${dynamicTitle} - ZihxS's Blog`,
      description: `${dynamicDescription}  - ZihxS's Blog`
    }
}

export const generateStaticParams = async () => {
    const posts = GetPostMetadata()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

export default Post