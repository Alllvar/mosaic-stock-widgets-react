import React, { useState } from 'react';
import { MosaicWindow, MosaicBranch } from "react-mosaic-component";
import TickerDropdown from './TickerDropdown';
import CompanyWidget from './CompanyWidget';

type CustomTileProps = {
    initialTicker: string;
    path: MosaicBranch[];
};

const CustomTile: React.FC<CustomTileProps> = ({ initialTicker, path }) => {
    const [ticker, setTicker] = useState(initialTicker);

    return (
        <MosaicWindow<string>
            title="Company info"
            toolbarControls={[
                <TickerDropdown key="dropdown" value={ticker} onSelect={setTicker} />,
            ]}
            path={path}
            createNode={() => 'AAPL'}
        >
            <CompanyWidget ticker={ticker} />
        </MosaicWindow>
    );
};

export default CustomTile;
