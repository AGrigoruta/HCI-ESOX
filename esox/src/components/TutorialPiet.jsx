import React from 'react';

class TutorialPiet extends React.Component {

    render() {
        return (
            <div className="tutorial__frame">
                <iframe className="frame" src="piet/index.html"></iframe>
            </div>
        );
    }
}

export default TutorialPiet;
