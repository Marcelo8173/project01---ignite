import React, { useContext } from 'react';
import * as S from './style';
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TrasactionsContext } from '../../TransactionsContext';

export const Summary = () => {

    const { transactions } = useContext(TrasactionsContext);
    
   
    const summary = transactions.reduce((acc, transactions) => {
        if (transactions.type === 'deposit') {
            acc.deposite += transactions.amount
            acc.total += transactions.amount

        } else {
            acc.withdraws += transactions.amount;
            acc.total -= transactions.amount
        }

        return acc;
    }, {
        deposite: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <S.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Icone com seta para cima simbolizando as entradas"/>
                </header>
                <strong>R${summary.deposite}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Icone com seta para baixo simbolizando as saidas"/>
                </header>
                <strong> - R${summary.withdraws}</strong>
            </div>
            <div className="back">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Icone com seta de dinheiro simbolizando o total"/>
                </header>
                <strong>R${summary.total}</strong>
            </div>
        </S.Container>
    )
}