import React from 'react';
import logo from '../../assets/logo.svg';
import * as S from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export const Header = ({onOpenNewTransactionModal}:HeaderProps) => {
    return (
        <S.Container>
            <S.Content>
                <img src={logo} alt="dt money" />
                <button onClick={onOpenNewTransactionModal}>
                    nova transação 
                </button>
            </S.Content>
        </S.Container>
    )
};