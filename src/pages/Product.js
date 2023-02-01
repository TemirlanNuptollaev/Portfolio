import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import MyButton from "../UI/MyButton/MyButton";
import {products} from "./../helpers/productsList"

const Product = () => {
	const {id} = useParams();
	const product = products[id];

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{product.title}</h1>

					<img
						src={product.imgBig}
						alt={product.title}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>Skills: {product.skills}</p>
					</div>

					{product.gitHubLink && (
						<MyButton link={product.gitHubLink}/>
						// <BtnGitHub link={product.gitHubLink} />
					)}
				</div>
			</div>
		</main>
	);
}

export default Product;