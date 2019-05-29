import React from 'react';

class TutorialBefunge extends React.Component {

    render() {
        return (
            <div className="tutorial__frame">
                <iframe className="frame" src="befunge/index.html"></iframe>
            </div>
        );
    }
}

export default TutorialBefunge;
