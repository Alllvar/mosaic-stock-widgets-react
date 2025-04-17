import React from 'react';
import { Mosaic, MosaicNode, MosaicBranch } from "react-mosaic-component";
import 'react-mosaic-component/react-mosaic-component.css';
import CustomTile from './CustomTile';

const initialNode: MosaicNode<string> = {
    direction: 'row',
    first: 'AAPL',
    second: {
        direction: 'column',
        first: 'NVDA',
        second: 'MSFT',
    },
};

const renderTile = (ticker: string, path: MosaicBranch[]) => {
    return <CustomTile initialTicker={ticker} path={path} />;
};

const Dashboard: React.FC = () => {
    return (
        <div className="p-4" style={{ height: '100vh' }}>
            <Mosaic<string>
                initialValue={initialNode}
                renderTile={renderTile}
            />
        </div>
    );
};

export default Dashboard;
