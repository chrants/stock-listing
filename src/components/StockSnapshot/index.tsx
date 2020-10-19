import React, { useEffect, useState } from "react";
import axiosClient, { API_KEY } from "../../api/axios-client";
import { StockDetails, StockSnapshot as StockSnapshotType } from "../../App";
import { Card } from "../Card";
import "./StockSnapshot.scss";

interface Props {
    stockSnapshot: StockSnapshotType;
}
export const StockSnapshot = ({ stockSnapshot }: Props) => {
    const [stockDetails, setStockDetails] = useState<StockDetails | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setStockDetails(null);
        setErrorMessage('');

        (async () => {
            const resp = (await axiosClient.get(`/query?function=GLOBAL_QUOTE&symbol=${stockSnapshot.symbol}&apikey=${API_KEY}`));
            if (resp.data?.["Global Quote"]) {
                const d = resp.data?.["Global Quote"];
                const s: any = {};
                for (const k in d) {
                    s[k.substring(4)] = d[k];
                }
                setStockDetails(s);
            } else {
                setErrorMessage("Could not fetch info for " + stockSnapshot.name)
            }
        })();
    }, [stockSnapshot]);

    if (errorMessage) {
        return <Card>{errorMessage}</Card>
    }

    return <Card>
        <div>{stockSnapshot.name} ({stockSnapshot.symbol})</div>
        <div>${stockDetails?.price} (Change ${stockDetails?.change})</div>
    </Card>;
};

