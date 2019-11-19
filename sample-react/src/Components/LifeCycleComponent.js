import React from 'react';

class LifeCycleComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bkGroundColor: {
                backgroundColor: 'green'
            }
        }
        this.handleBkGroundColor = this.handleBkGroundColor.bind(this);
    }

    handleBkGroundColor = () => {
        let bkGround = {...this.state.bkGroundColor};
        bkGround.backgroundColor = 'blue';
        console.log(JSON.stringify(bkGround));
        this.setState({bkGroundColor: bkGround});
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate prevProps: " + JSON.stringify(prevProps));
        console.log("getSnapshotBeforeUpdate prevState: " + JSON.stringify(prevState));
        return prevProps.bkgroundColor;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("snapshot: " + JSON.stringify(snapshot));
        console.log("componentDidUpdate prevState: " + prevState.bkGroundColor.backgroundColor);
        console.log("componentDidUpdate prevProps: " + prevProps);
    }

    static getDerivedStateFromProps(props, state) {
        console.log("call getDerivedStateFromProps" + JSON.stringify(state));
        return { bkGroundColor: {backgroundColor: state.bkGroundColor.backgroundColor}}
    }

    componentDidMount() {
        console.log("After rendering: " + this.state.bkGroundColor.backgroundColor);
    }

    render() {
        return (
            <div>
                <div style={this.state.bkGroundColor}>
                    LifeCycleComponent
                </div>
                <button onClick={this.handleBkGroundColor} name="chageColor">Change Color</button>
            </div>
        );
    }
}

export default LifeCycleComponent;
