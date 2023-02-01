import "./style.css";

const Content = (props) => {
    return (
		<section className="content">
			<div className="content__wrapper">
				<h1 className="content__title">
					<strong>
						{props.title}
					</strong>
					<br />{props.subtitle}
				</h1>
				<div className="content__text">
					<p>{props.text}</p>
				</div>
				<a href="#!" className="btn">
					{props.button}
				</a>
			</div>
		</section>
	);
}

export default Content;