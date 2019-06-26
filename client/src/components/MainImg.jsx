import React from 'react';
import classes from '../styles/MainImg.css';

class mainImg extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className={classes.MainImg}>
				<img src={this.props.data} />
			</div>
		);
	}
}

export default mainImg;
