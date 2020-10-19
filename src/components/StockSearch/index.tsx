import React, { useEffect, useState } from "react";
import { StockSnapshot } from "../../App";
import axiosClient, { API_KEY } from "../../api/axios-client";
import { Card } from "../Card";
import "./StockSearch.scss"

interface Props {
    onSubmit: (stockSnap: StockSnapshot) => void;
}
export const StockSearch = ({ onSubmit }: Props) => {
    const [stockSnapshots, setStockSnapshots] = useState<StockSnapshot[] | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        setErrorMessage('');
        if (query === '') {
            return;
        }

        (async () => {
            const resp = await (await axiosClient.get(`/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`));
            if (resp.data?.bestMatches) {
                const stocks = resp.data?.bestMatches.map((stock: any) => {
                    const s: any = {};
                    for (const key in stock) {
                        s[key.substring(3)] = stock[key];
                    }
                    return s;
                });
                setStockSnapshots(stocks);
            } else {
                setErrorMessage('Failed to fetch data for ' + query);
            }
        })();
    }, [query]);

    return <div>
        <input className="searchInput" onChange={(evt) => setQuery(evt.target.value)} value={query} />
        {query !== '' && (
            <Card>
                {errorMessage}
                {stockSnapshots?.map(snap => (
                    <div
                        className="searchInput__result"
                        onClick={() => {
                            onSubmit(snap);
                            setQuery('');
                        }} key={snap.symbol}
                    >
                        {snap.symbol} {snap.name}
                    </div>
                ))}
            </Card>
        )}
    </div >;
};