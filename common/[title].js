export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
  const posts = await res.json()
    const paths = posts.map((post) => ({
      params: { title: post.title },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${params.title}`)
  const post = await res.json()

  return { props: { post } }
}

export default function PostPage ({ post }) {
  const { longTitle, created, coverImg, nodes} = post
  const html = buildHtml(nodes)
  return (
    <div className={'root'}>
		Hello
    </div>
  )
}