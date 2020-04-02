import { createPublication } from 'react-pub-sub';

const publication = () => {
    return createPublication('RefreshData');
};

export default publication();
