import { useRouter } from "next/router";
function PortfolioProjectPage(props) {
	const router = useRouter();

    return (
		<div>
			<h1>PortfolioProjectPage {router.query.projectid}</h1>
		</div>
	);
}

export default PortfolioProjectPage;
