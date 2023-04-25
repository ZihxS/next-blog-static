import PostPreview from '@/components/PostPreview'
import GetPostMetadata from '@/models/GetPostMetadata'

const Home = () => {
  const postMetadata = GetPostMetadata()
  const postPreviews = postMetadata.map((post) => <PostPreview key={post.slug} {...post} />)

  return <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>{postPreviews}</div>
}

export default Home