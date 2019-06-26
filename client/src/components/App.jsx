import React from 'react';
import MainImg from './MainImg.jsx';
import Thumbnails from './ThumbnailList.jsx';
import classes from '../styles/App.css';
import imageList from '../../../database/index.json';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			imageData: '',
			imageThumbNails: []
		};
	}
	componentDidMount () {
		let id = window.location.pathname.split('/')[1];
		id = parseInt(id);
		let image = imageList.ImageInfo.filter((ele) => ele.ProductId === id);
		this.setState({
			imageData: image[0].ImageURL,
			imageThumbNails: image[0].ThumbNailArray
		});
	}

	render () {
		return (
			<div className={classes.App}>
				<Thumbnails thumbnaildata={this.state.imageThumbNails} />
				<MainImg data={this.state.imageData} />
			</div>
		);
	}
}

export default App;
