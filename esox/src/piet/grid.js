import React from 'react';

import { colours } from './colours.js';
import ColourPicker from './colourPicker.js';

class Grid extends React.Component {
    render() {
        return [
            <div className="work-area" key="work-area">
                <table key="piet-program" className="piet-program" onMouseOut={() => this.props.setCellInFocus(null)}>
                    <tbody>
                        {this.props.grid.map((row, i) => (
                            <tr key={'row-' + i}>
                                {row.map((cell, j) => (
                                    <td
                                        key={'cell-' + i + '-' + j}
                                        title={'(' + j + ',' + i + ')'}
                                        style={{
                                            maxHeight: '30px',
                                            maxWidth: '30px',
                                            height: this.props.cellDim + 'px',
                                            width: this.props.cellDim + 'px',
                                            border: '1px solid black',
                                            background: this.props.debug.breakpoints.includes(this.props.blocks[i][j])
                                                ? 'repeating-linear-gradient(45deg, ' +
                                                colours[cell] +
                                                ', ' +
                                                colours[cell] +
                                                ' 2px, black 2px, black 4px)'
                                                : colours[cell],
                                            color: 'white',
                                            fontSize: '11px',
                                            textShadow: '1px 1px 1px black',
                                            textAlign: 'center',
                                            cursor: {
                                                BRUSH: 'url(img/pencil.png) 5 30,auto',
                                                BUCKET: 'url(img/paint-bucket.png) 28 28,auto',
                                                BP: 'url(img/bp.png) 16 32,auto',
                                            }[this.props.paintMode],
                                        }}
                                        onMouseOver={() => this.props.setCellInFocus(i, j)}
                                        onClick={() => this.props.handleCellClick(i, j)}>
                                        {this.props.blocks[i][j] == this.props.debug.block
                                            ? '◉'
                                            : this.props.displayBS && this.props.blockSizes[i][j]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ColourPicker key="colour-picker" {...this.props} />
                <DebugControls {...this.props} {...this.props.debug} />
            </div>
        ]
    }
};

// run/step/continue/stop/pause + set BP control buttons
const DebugControls = ({
    start,
    pause,
    step,
    cont,
    stop,
    setRunSpeed,
    getRunSpeed,
    paintMode,
    toggleSetBP,
}) => (
    <div className="btn-toolbar" role="toolbar" className="controls">
        <button
            type="button"
            className="btn btn-success"
            title="Run from the beginning"
            onClick={() => start()}>
            <i className="glyphicon glyphicon-play" />
        </button>
        <button
            type="button"
            className="btn btn-primary"
            title="Increase delay"
            onClick={() => {
                let speed = getRunSpeed();
                if(speed + 100 <= 1000) {
                    setRunSpeed(speed + 100);
                }
            }}>
            <i className="glyphicon glyphicon-plus" />
        </button>
        <button
            type="button"
            className="btn btn-primary"
            title="Decrease delay"
            onClick={() => {
                let speed = getRunSpeed();
                if(speed - 100 > 0) {
                    setRunSpeed(speed - 100);
                }
            }}>
            <i className="glyphicon glyphicon-minus" />
        </button>
        <button type="button" className="btn btn-warning" title="Pause" onClick={() => pause()}>
            <i className="glyphicon glyphicon-pause" />
        </button>
        <button type="button" className="btn btn-info" title="Step" onClick={() => step()}>
            <i className="glyphicon glyphicon-step-forward" />
        </button>
        <button
            type="button"
            className="btn btn-primary"
            title="Continue running from this point"
            onClick={() => cont()}>
            <i className="glyphicon glyphicon-fast-forward" />
        </button>
        <button type="button" className="btn btn-danger" title="Stop" onClick={() => stop()}>
            <i className="glyphicon glyphicon-stop" />
        </button>
        <i
        className="glyphicon glyphicon-map-marker"
        title="Set breakpoints"
        style={{
            fontSize: '18px',
            margin: '0 0 0 3px',
            padding: '5px 0',
            cursor: 'pointer',
            color: paintMode == 'BP' ? 'red' : 'black',
        }}
        onClick={() => toggleSetBP()}
        />
    </div>
);

export default Grid;
