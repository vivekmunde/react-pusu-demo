import React from 'react';
import Publisher from './publisher';
import TopUsers from './top-users';
import TopProducts from './top-products';
import TopCompanies from './top-companies';
import TopTopics from './top-topics';

const columnStyle = {
    width: '50%',
    padding: '5px',
    boxSizing: 'border-box'
};

const App = () => (
    <div
        style={{
            padding: '0',
            margin: '0 auto',
            fontSize: '1rem',
            color: '#555',
            fontFamily: 'Arial'
        }}
    >
        <div
            style={{
                padding: '0 10px',
                margin: '0 0 20px 0',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
                backgroundColor: '#eee',
            }}
        >
            <div
                style={columnStyle}
            >
                react-pub-sub demo
            </div>
            <div
                style={{
                    ...columnStyle,
                    textAlign: 'right'
                }}
            >
                <Publisher />
            </div>
        </div>
        <div
            style={{
                width: '60%',
                margin: '0 auto'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap'
                }}
            >
                <div
                    style={columnStyle}
                >
                    <TopTopics />
                </div>
                <div
                    style={columnStyle}
                >
                    <TopCompanies />
                </div>
                <div
                    style={columnStyle}
                >
                    <TopProducts />
                </div>
                <div
                    style={columnStyle}
                >
                    <TopUsers />
                </div>
            </div>
        </div>
    </div>
);

export default App;
