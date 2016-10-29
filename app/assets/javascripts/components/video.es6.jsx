class Video extends React.Component {

    startCamera() {
        return(
            <div id="affectiva-video-container">
                <p>Camera Enabled</p>
            </div>
        )
    }

    requestCamera() {
        return(
            <button onClick={this.props.enableCamera}>Enable Camera Feed</button>
        )
    }
    
    renderStream() {
        if (this.props.cameraEnabled) {
            return this.startCamera();
        } else {
            return this.requestCamera();
        }
    }

    loadAffectivaDetector() {
        let videoRoot = $('affectiva-video-container')[0];
        let width = 640;
        let height = 480;
        let faceMode = affdex.FaceDetectorMode.LARGE_FACES;
        let detector = new affdex.CameraDetector(videoRoot, width, height, faceMode);

        detector.detectAllEmotions();
        detector.detectAllExpressions();
        detector.detectAllAppearance();
    }

    componentDidMount() {
        if (this.props.cameraEnabled) {
            this.loadAffectivaDetector();
        }
    }
    
    
  render () {
    return this.renderStream();
  }
}

