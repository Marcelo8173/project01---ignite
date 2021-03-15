import React from 'react';
import * as S from './style';
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export const Summary = () => {
    return (
        <S.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Icone com seta para cima simbolizando as entradas"/>
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Icone com seta para baixo simbolizando as saidas"/>
                </header>
                <strong> - R$1000</strong>
            </div>
            <div className="back">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Icone com seta de dinheiro simbolizando o total"/>
                </header>
                <strong>R$1000</strong>
            </div>
        </S.Container>
    )
}