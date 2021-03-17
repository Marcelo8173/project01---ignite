import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from './services/api';

interface ITransactions{
    id: number,
    title: string,
    type: string,
    category: string;
    amount: number,
    createdAt: Date;
}

type ITransactionsCreate = Omit<ITransactions, 'id' | 'createdAt'>;

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContext{
    transactions: ITransactions[];
    create: (transaction:ITransactionsCreate) => Promise<void> 
}

export const TrasactionsContext = createContext<TransactionsContext>({} as TransactionsContext);


export const TransactionsProvider = ({children}:TransactionsProviderProps) => {
    
    const [transactions, setTransactions] = useState<ITransactions[]>([])

    useEffect(() => {
        api.get('transactions').then(response => {
            setTransactions(response.data.transactions);
        })
    }, []);

    async function create(transactionInput:ITransactionsCreate) {
        const response = await api.post(`transactions`, {
            ...transactionInput,
            createdAt: new Date()
        });
        const { transaction } = response.data;
        setTransactions([
            ...transactions,
            transaction
        ])
    }
    
    return (
        <TrasactionsContext.Provider value={{transactions,create}}>
            {children}
        </TrasactionsContext.Provider>
    )
}