import Link from "next/link";
function HomePage(props) {
	return (
		<div>
			<h1>Hello Worlds</h1>
			<ul>
				<li><Link href="/portfolio">Portfolio</Link></li>
				<li><Link href="/portfolio/list" replace>Portfolio List</Link></li>
			</ul>
		</div>
	);
}

export default HomePage;
