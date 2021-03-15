import React from 'react';
import * as S from './style';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

export const Dashboard = () => {
    return (
        <S.Container>
            <Summary />
            <TransactionsTable />
        </S.Container>  
    );
}