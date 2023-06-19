import { useRouter } from "next/router";
function PortfolioPage(props) {
	const router = useRouter();
	function portfolioAHandler() {
		router.push('/portfolio/A')
	}
	function portfolioBHandler() {
		router.push({
			pathname: '/portfolio/[projectid]',
			query:{projectid:'B'}
		})
	}
	return (
		<div>
			<h1>The Portfolio Page</h1>
			<button onClick={portfolioAHandler}>Go to Portfolio A</button>
			<button onClick={portfolioBHandler}>Go to Portfolio B</button>
		</div>
	);
}

export default PortfolioPage;
