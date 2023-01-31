import "./style.css";

const Content = (props) => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						{props.title}<em>{props.name}</em>
					</strong>
					<br />{props.subtitle}
				</h1>
				<div className="header__text">
					<p>{props.text}</p>
				</div>
				<a href="#!" className="btn">
					{props.button}
				</a>
			</div>
		</header>
	);
}

export default Content;