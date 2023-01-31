import React from 'react'

function ContentTwo(props) {
  return (
    <main className="section">
      <div className="container" >
				<ul className="content-list" >
					<li className="content-list__item">
						<h2 className="title-2">{props.title}</h2>
						<p>
							{props.body}
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">{props.titleTwo}</h2>
						<p>{props.bodyTwo}</p>
					</li>
				</ul>
			</div>
		</main>
        
  )
}

export default ContentTwo