import fs from 'fs'

const getContent = (slug: string) => {
    const file = `posts/${slug}.md`
    const content = fs.readFileSync(file, "utf8")

    return content
}

const Post = (props: any) => {
    const { slug } = props.params
    const content = getContent(slug)

    return (
        <div>
            <h2>this is post with slug: {slug}</h2>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Post