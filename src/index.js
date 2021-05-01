import React from 'react';
import ReactDOM from 'react-dom';

/* const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return <div>Latitude:</div>;
}; */

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            lat: null
        };
    }

    /** React says we have to define render!! */
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude:</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
