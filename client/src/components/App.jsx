import React from 'react';
import MainImg from './MainImg.jsx';
import Thumbnails from './ThumbnailList.jsx';
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
			<div className="App">
				<MainImg data={this.state.imageData} />
				<Thumbnails thumbnaildata={this.state.imageThumbNails} />
			</div>
		);
	}
}

export default App;
