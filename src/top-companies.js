import React from 'react';
import { withSubscribe } from 'react-pusu';
import publication from './publication';

const getDummyData = () => {
    const randomValue = (min, max) => Math.floor(Math.random() * (max - min) + min);

    return [
        { id: 1, name: 'TNC Co', ranking: randomValue(1, 999) },
        { id: 2, name: 'Veto La LLC', ranking: randomValue(1, 999) },
        { id: 3, name: 'Mistri Corp', ranking: randomValue(1, 999) },
        { id: 4, name: 'OO Net', ranking: randomValue(1, 999) },
        { id: 5, name: 'Blas Fam Inc', ranking: randomValue(1, 999) },
        { id: 6, name: 'Chitti Farma', ranking: randomValue(1, 999) },
        { id: 7, name: 'Ubem & Co', ranking: randomValue(1, 999) },
    ].sort((a, b) => a.ranking - b.ranking);
}

const rowStyle = {
    borderBottom: 'solid 1px #bbb',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
};

const columnStyle = {
    padding: '10px',
    textAlign: 'left',
    width: '50%'
};

class TopUsers extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            fetchDate: new Date()
        };
        props.subscribe(publication, this.refreshData);
    }

    refreshData = (fetchDate) => {
        this.setState({ fetchDate });
    }

    render() {
        return (
            <div
                style={{
                    padding: '0',
                    margin: '0',
                    border: 'solid 1px #bbb',
                    borderBottom: 'none',
                    borderRadius: '3px'
                }}
            >
                <div
                    style={rowStyle}
                >
                    <div
                        style={columnStyle}
                    >
                        Top Companies
                    </div>
                </div>
                <div
                    style={rowStyle}
                >
                    <div
                        style={columnStyle}
                    >
                        Name
                    </div>
                    <div
                        style={columnStyle}
                    >
                        Ranking
                    </div>
                </div>
                {getDummyData().map(({ id, name, ranking }) => (
                    <div
                        key={id}
                        style={rowStyle}
                    >
                        <div
                            style={columnStyle}
                        >
                            {name}
                        </div>
                        <div
                            style={columnStyle}
                        >
                            {ranking}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default withSubscribe(TopUsers);
