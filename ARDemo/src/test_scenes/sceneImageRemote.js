import React from 'react';
const RNFS = require('react-native-fs');
import { APIClient } from '../api';

class SceneImageRemote extends React.Component {

	constructor(props) {
		super(props);
		this.state = { localPath: '', downloadJobId: undefined };
	};

	componentDidMount() {
		const localPath = RNFS.DocumentDirectoryPath + '/fruits.png';
		const options = {
			fromUrl: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
			toFile: localPath
		};
		const value = RNFS.downloadFile(options);
		this.setState({ downloadJobId: value.jobId });
		value.promise.then((result) => this.setState({ localPath }))
		.catch((error) => console.log('[RNFS] Cannot download file. Reason: ', error));
	}

	componentWillUnmount() {
		RNFS.stopDownload(this.state.downloadJobId);
	}

	render () {
		const frameSize = 0.75;
		return (
			<view localPosition={this.props.localPosition}>
				<image 
					filePath={'https://homepages.cae.wisc.edu/~ece533/images/monarch.png'}
					color={[0.3,0.7,0.5,1]}
					localPosition={[0,0.7,0]}
					width={frameSize}
					height={frameSize}
					useFrame
				/>
				<image 
					filePath={'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}
					localPosition={[-0.35,0,-0]}
					width={frameSize}
					height={frameSize}
					useFrame
				/>
				<image
					filePath={'https://homepages.cae.wisc.edu/~ece533/images/girl.png'}
					localPosition={[0.325,0,0.05]}
					width={frameSize}
					height={frameSize}
					useFrame
				></image>
				<image
					filePath={'https://homepages.cae.wisc.edu/~ece533/images/cat.png'}
					localPosition={[-0.425,-0.85,0]}
					width={frameSize}
					height={frameSize}
					useFrame
				></image>
				<image
					filePath={this.state.localPath}
					localPosition={[0.3,-0.85,0]}
					width={frameSize}
					height={frameSize}
					useFrame
				></image>
			</view>
		);
	}
}

export { SceneImageRemote };
