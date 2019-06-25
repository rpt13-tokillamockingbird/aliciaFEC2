import React from 'react';

class thumbnails extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="Thumbnails">
				{this.props.thumbnaildata.map((imgsrc) => {
					return <img src={imgsrc} />;
				})}
			</div>
		);
	}
}

export default thumbnails;
