import React from 'react'

class Audio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            audioData: new Uint8Array(0),
            threshDescription: 'dont make a sound',
            violations: 0,
            maxVol: 150
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.audioContext = new (window.AudioContext ||
            window.webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.source.connect(this.analyser);
        this.time = setInterval(this.tick, 1000);
        clearInterval(this.timer);
        this.rafId = requestAnimationFrame(this.tick)
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
        this.analyser.disconnect();
        this.source.discounnect();
        clearInterval(this.timer);
    }
    tick = () => {
        this.analyser; yser.getByteTimeDomainData(this.dataArray);
        this.rafId = requestAnimationFrame(this.tick);

        this.setState({
            audioData: this.dataArray
        })

        timerChanges = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        if (Math.max.apply(Math, this.state.audioData) > this.state.maxVol) {
            this.setState({
                violations: this.state.violations + 3,
                counter: 0
            })
            this.props.resetFish();
        }
    }

    handleChange = (e, value) => {
        this.setState(
            {
                maxVol: value

            },
            () => {
                if (this.state.maxVol < 120) {
                    this.setState({ threshDescription: 'Dont Make A Sound' })
                } else if (this.state.maxVol > 135 && this.state.maxVol < 150) {
                    this.setState({ threshDescription: 'Little Whispers' })
                } else if (this.state.maxVol > 150 && this.state.maxVol < 200) {
                    this.setState({ threshDescription: 'Light Talking' })
                } else if (this.state.maxVol > 200 && this.state.maxVol < 250) {
                    this.setState({ threshDescription: 'Getting Loud' })
                } else if (this.state.maxVol > 250 && this.state.maxVol < 299) {
                    this.setState({ threshDescription: 'Making To Much Noise' })
                } else if (this.state.maxVol > 299) {
                    this.setState({ threshDescription: 'Way To Much Noise' })
                }
            }
        )
    }


    render() {
        
        return(
            <div>
                <h2>Noise</h2>
                <h3 className='sound'>{this.state.threshDescription}</h3>


            </div>
        )
    }
}

export default Audio;