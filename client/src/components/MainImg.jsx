import React from 'react';

class mainImg extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="MainImg">
				<img src={this.props.data} />
			</div>
		);
	}
}

export default mainImg;
