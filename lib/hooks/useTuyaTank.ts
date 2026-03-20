'use client'

import { useState, useEffect } from 'react';

interface TankData {
    waterLevel?: number;
    temperature?: number;
    battery?: number;
    timestamp?: string;
}

export function useTuyaTank(refreshInterval = 30000) {
    const [data, setData] = useState<TankData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const res = await fetch('/api/tank');
            const result = await res.json();

            if (res.ok) {
                setData(result);
                setError(null);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError('Error de conexión');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, refreshInterval);
        return () => clearInterval(interval);
    }, [refreshInterval]);

    return { data, loading, error, refetch: fetchData };
}