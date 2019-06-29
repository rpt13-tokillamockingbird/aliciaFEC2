import React from 'react';
import classes from '../styles/ThumbnailList.css';

class thumbnails extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className={classes.ThumbnailList}>
				{this.props.thumbnaildata.map((imgsrc) => {
					return <img className={classes.thumbnail} src={imgsrc} />;
				})}
			</div>
		);
	}
}

export default thumbnails;
