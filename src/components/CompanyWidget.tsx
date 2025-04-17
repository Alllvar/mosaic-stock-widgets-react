import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../api/fakeApi';

type Company = {
    id: string;
    ticker: string;
    name: string;
    lei?: string;
    legal_name?: string;
    stock_exchange?: string;
    short_description?: string;
    long_description?: string;
    ceo?: string;
    company_url?: string;
    business_address?: string;
    mailing_address?: string;
    business_phone_no?: string;
    // Можна додати й інші поля, якщо є у JSON
    employees?: number;
    sector?: string;
    industry_category?: string;
    industry_group?: string;
    first_stock_price_date?: string;
    last_stock_price_date?: string;
    legacy_sector?: string;
    legacy_industry_category?: string;
    legacy_industry_group?: string;
};

type Props = {
    ticker?: string;
};

const CompanyWidget: React.FC<Props> = ({ ticker = 'AAPL' }) => {
    const [company, setCompany] = useState<Company | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchCompanies()
            .then((data: Company[]) => {
                const selected = data.find((c) => c.ticker === ticker);
                setCompany(selected || null);
            })
            .catch(() => {
                setError('Не вдалося завантажити дані');
            });
    }, [ticker]);

    if (error) {
        return <div className="p-4 border rounded bg-white shadow overflow-auto text-red-600">{error}</div>;
    }

    if (!company) {
        return <div className="p-4 border rounded bg-white shadow overflow-auto">Завантаження...</div>;
    }

    return (
        <div className="p-4 border rounded bg-white shadow overflow-y-scroll h-full">
            <div className="text-sm text-gray-700 space-y-1">
                <div>
                    <span className="font-bold">ticker:</span> {company.ticker}
                </div>
                <div>
                    <span className="font-bold">Name:</span> {company.name}
                </div>
                {company.legal_name && (
                    <div>
                        <span className="font-bold">Legal name:</span> {company.legal_name}
                    </div>
                )}
                {company.stock_exchange && (
                    <div>
                        <span className="font-bold">Stock exchange:</span> {company.stock_exchange}
                    </div>
                )}
                {company.short_description && (
                    <div>
                        <span className="font-bold">Short description:</span> {company.short_description}
                    </div>
                )}
                {company.long_description && (
                    <div>
                        <span className="font-bold">Long description:</span> {company.long_description}
                    </div>
                )}
                {company.ceo && (
                    <div>
                        <span className="font-bold">CEO:</span> {company.ceo}
                    </div>
                )}
                {company.company_url && (
                    <div>
                        <span className="font-bold">Web:</span> {company.company_url}
                    </div>
                )}
                {company.business_address && (
                    <div>
                        <span className="font-bold">Business address:</span> {company.business_address}
                    </div>
                )}
                {company.mailing_address && (
                    <div>
                        <span className="font-bold">Mailing address:</span> {company.mailing_address}
                    </div>
                )}
                {company.business_phone_no && (
                    <div>
                        <span className="font-bold">Phone:</span> {company.business_phone_no}
                    </div>
                )}
                {company.employees && (
                    <div>
                        <span className="font-bold">Employees:</span> {company.employees}
                    </div>
                )}
                {company.sector && (
                    <div>
                        <span className="font-bold">Sector:</span> {company.sector}
                    </div>
                )}
                {company.industry_category && (
                    <div>
                        <span className="font-bold">Industry category:</span> {company.industry_category}
                    </div>
                )}
                {company.industry_group && (
                    <div>
                        <span className="font-bold">Industry group:</span> {company.industry_group}
                    </div>
                )}
                {company.first_stock_price_date && (
                    <div>
                        <span className="font-bold">First stock price date:</span> {company.first_stock_price_date}
                    </div>
                )}
                {company.last_stock_price_date && (
                    <div>
                        <span className="font-bold">Last stock price date:</span> {company.last_stock_price_date}
                    </div>
                )}
                {company.legacy_sector && (
                    <div>
                        <span className="font-bold">Legacy sector:</span> {company.legacy_sector}
                    </div>
                )}
                {company.legacy_industry_category && (
                    <div>
                        <span className="font-bold">Legacy industry category:</span> {company.legacy_industry_category}
                    </div>
                )}
                {company.legacy_industry_group && (
                    <div>
                        <span className="font-bold">Legacy industry group:</span> {company.legacy_industry_group}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompanyWidget;
