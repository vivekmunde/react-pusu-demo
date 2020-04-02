import React from 'react';
import { withPublish } from 'react-pub-sub';
import publication from './publication';

const PublisherButton = ({ publish }) => (
    <button
        style={{
            color: '#555',
            padding: '10px',
            backgroundColor: '#fff',
            border: 'solid 1px #e4e4e4',
            borderRadius: '3px',
            fontSize: '1rem',
            textAlign: 'center'
        }}
        onClick={() => {
            publish(publication, new Date());
        }}
    >
        Refresh Data
    </button>
);

export default withPublish(PublisherButton);
