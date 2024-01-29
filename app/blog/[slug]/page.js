export default function BlogPosts ({params}) {
    return (<main>
        <h1>My Post</h1>

        <h1>{params.slug}</h1>
    </main>)
}