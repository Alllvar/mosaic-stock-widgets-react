import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../api/fakeApi';

type Company = {
    ticker: string;
    name: string;
};

type Props = {
    value?: string;
    onSelect?: (ticker: string) => void;
};

const TickerDropdown: React.FC<Props> = ({ value, onSelect }) => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [internalSelected, setInternalSelected] = useState<string>('');

    const selectedValue = value !== undefined ? value : internalSelected;

    useEffect(() => {
        fetchCompanies()
            .then((data: Company[]) => {
                setCompanies(data);
                if (data.length > 0 && value === undefined && !internalSelected) {
                    setInternalSelected(data[0].ticker);
                    if (onSelect) onSelect(data[0].ticker);
                }
            })
            .catch((err) => console.error(err));
    }, [ internalSelected]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newTicker = event.target.value;
        if (value === undefined) {
            setInternalSelected(newTicker);
        }
        if (onSelect) {
            onSelect(newTicker);
        }
    };

    return (
        <select
            value={selectedValue}
            onChange={handleChange}
            className="border rounded"
        >
            {companies.map((company) => (
                <option key={company.ticker} value={company.ticker}>
                    {company.name} ({company.ticker})
                </option>
            ))}
        </select>
    );
};

export default TickerDropdown;
