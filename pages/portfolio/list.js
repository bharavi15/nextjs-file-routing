import Link from "next/link";
function ListPage(props) {
	const portfolios = [
		{ id: "id1", name: "bha" },
		{ id: "id2", name: "bh" },
	];
	return (
		<div>
			<h1>One way to do this</h1>
			<ul>
				{portfolios.map((portfolio) => (
					<li key={portfolio.id}>
						<Link href={`/portfolio/${portfolio.id}`}>{portfolio.name}</Link>
					</li>
				))}
			</ul>
			<h1>Another way of doing this</h1>
			<ul>
				{portfolios.map((portfolio) => (
					<li key={portfolio.id}>
						<Link
							href={{
								pathname: "/portfolio/[projectid]",
								query: { projectid: portfolio.id },
							}}
						>
							{portfolio.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListPage;
