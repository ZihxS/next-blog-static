import { PostMetadata } from "@/models/interfaces/PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-slate-200 p-4 rounded-md shadow-md bg-white">
            <Link href={`/${props.slug}`}>
                <h2 className="font-bold text-violet-600 hover:underline">{props.slug}</h2>
            </Link>
            <p className="text-sm text-slate-400">{props.subtitle}</p>
            <p className="text-slate-700">{props.date}</p>
        </div>
    )
}

export default PostPreview