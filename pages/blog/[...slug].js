import { useRouter } from "next/router";

function BlogPage(props) {
	const router = useRouter();
    console.log(router.query);
	return <div>The blog posts!</div>;
}

export default BlogPage;
