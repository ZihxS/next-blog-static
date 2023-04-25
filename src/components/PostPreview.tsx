import { PostMetadata } from "@/models/interfaces/PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-slate-300 p-4 rounded-md shadow-md bg-sky-200">
            <p className="text-sm text-slate-500">{props.date}</p>
            <Link href={`/${props.slug}`}>
                <h2 className="font-bold text-sky-900 hover:underline mb-3">{props.slug}</h2>
            </Link>
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
    )
}

export default PostPreview