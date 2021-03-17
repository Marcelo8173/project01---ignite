import React, { useEffect, useState } from 'react';
import * as S from './style';
import { api } from '../../services/api';


interface ITransactions{
    id: number,
    title: string,
    type: string,
    category: string;
    amount: number,
    createdAt: Date;
}

export const TransactionsTable = () => {
    
    const [transactions, setTransactions] = useState<ITransactions[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => {
            setTransactions(response.data.transactions);
        })
    }, []);

    return (
        <S.Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(item => (
                        <tr key={item.id}> 
                            <td>{item.title}</td>
                            <td className={item.type} >
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.amount)}
                            </td>
                            <td>{item.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format( new Date(item.createdAt))}
                            </td>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
        </S.Container>
    );
}