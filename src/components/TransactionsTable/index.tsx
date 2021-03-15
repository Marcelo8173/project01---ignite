import React, { useEffect } from 'react';
import * as S from './style';
import { api } from '../../services/api';

export const TransactionsTable = () => {
    
    useEffect(() => {
        api.get('transactions').then(response => {
            console.log(response.data);
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
                    <tr>
                        <td>Desenvolvimento de web</td>
                        <td>R$12.000</td>
                        <td>Dev</td>
                        <td>12/12/12</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de web</td>
                        <td>R$12.000</td>
                        <td>Dev</td>
                        <td>12/12/12</td>
                    </tr>
                </tbody>
            </table>
        </S.Container>
    );
}