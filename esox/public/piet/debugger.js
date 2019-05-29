import React from 'react';

// main debugger component container
class Debugger extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="debugger">
                <Commands {...this.props} {...this.props.debug} />
                <Pointers {...this.props.debug} />
                <Stack {...this.props.debug} />
                <IO {...this.props} {...this.props.debug} />
            </div>
        );
    }
}

const Commands = ({ commandList, selectBlock, isInterpreting, currCommand }) => [
    <div
        className='command-list'
        key="command-list">
        {commandList.map((command, i) => (
            <div
                key={'command-' + i}
                style={{ textTransform: 'uppercase' }}
                onMouseOver={() => !isInterpreting && selectBlock(command.block)}
                onMouseOut={() => !isInterpreting && selectBlock(null)}>
                {command.inst}
                {command.error && [
                    ' ',
                    <i
                        key={'error-' + i}
                        className="glyphicon glyphicon-exclamation-sign"
                        style={{ color: 'red' }}
                        title={command.error}
                    />,
                ]}
            </div>
        ))}
    </div>,
    isInterpreting &&
        currCommand && (
            <div
                className='current-command'
                key="current-command"
                style={{
                    margin: '-5px 0 10px',
                    width: '100%',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                Current command:<br />
                {currCommand.inst.toUpperCase()}
                {currCommand.error && <div style={{ color: 'red' }}>{currCommand.error}</div>}
            </div>
        ),
];

// IO visual containers
const IO = ({ output, isInterpreting }) => [
    <b key="input-label">Input</b>,
    <br key="br-1" />,
    <textarea
        key="in"
        id="in"
        placeholder="Enter input before running program"
        title="Tip: Whitespace before a numerical value is ignored"
        readOnly={isInterpreting}
    />,
    <br key="br-2" />,
    <b key="output-label">Output</b>,
    <br key="br-3" />,
    <textarea
        key="out"
        id="out"
        readOnly
        value={output}
    />,
];

// visual representation of stack
const Stack = ({ stack }) => (
    <table className="piet-stack">
        <thead>
            <tr>
                <td>
                    <b>Stack</b>
                </td>
            </tr>
        </thead>
        <tbody>
            {stack.concat('⮟').map((val, i) => (
                <tr
                    key={'val-' + i}
                    style={{
                        border: '1px solid black',
                        width: '100%',
                        height: '2ex',
                        textAlign: 'center',
                        verticalAlign: 'center',
                        fontFamily: 'monospace',
                        fontSize: '12pt',
                        wordBreak: 'break-all',
                    }}>
                    <td>{val}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

// visual representation of program pointers
const Pointers = ({ DP, CC }) => (
    <div className="piet-pointers">
        DP:&nbsp;
        <i className={'glyphicon glyphicon-arrow-' + ['right', 'down', 'left', 'up'][DP]} />&emsp;
        CC:&nbsp;<i className={'glyphicon glyphicon-arrow-' + ['left', 'right'][CC]} />
    </div>
);

export default Debugger;
