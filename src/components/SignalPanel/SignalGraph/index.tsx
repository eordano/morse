import * as React from 'react'

export type SignalGraphProps = {
  analyzer: any
}

const WIDTH = 450
const HEIGHT = 200

export default class SignalGraph extends React.PureComponent<SignalGraphProps> {
  mounted: any = null
  drawCall: number = 0
  dataArray: Uint8Array = new Uint8Array(0)

  draw = () => {
    this.drawCall = requestAnimationFrame(this.draw)

    const dataArray = this.dataArray
    const analyzer = this.props.analyzer
    const canvasCtx = this.mounted.getContext('2d')
    const bufferLength = analyzer.frequencyBinCount

    analyzer.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = "rgb(200, 200, 200)";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  
    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = "rgb(0, 0, 0)";
  
    canvasCtx.beginPath();
  
    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;
  
    for (var i = 0; i < bufferLength; i++) {
  
      var v = dataArray[i] / 128.0;
      var y = v * HEIGHT / 2;
  
      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }
  
      x += sliceWidth;
    }
  
    canvasCtx.lineTo(WIDTH, HEIGHT / 2);
    canvasCtx.stroke();
  }

  componentDidMount() {
    this.props.analyzer.fftSize = 2048
    this.dataArray = new Uint8Array(this.props.analyzer.frequencyBinCount)
    this.drawCall = requestAnimationFrame(this.draw)
    this.draw()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.drawCall)
  }

  render() {
    return <canvas
      width={WIDTH}
      height={HEIGHT}
      ref={(mounted) => this.mounted = mounted}
    />
  }
}
