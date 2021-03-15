import React from 'react';
import logo from '../../assets/logo.svg';
import * as S from './styles';

export const Header = () => {
    return (
        <S.Container>
            <S.Content>
                <img src={logo} alt="dt money" />
                <button>
                    nova transação 
                </button>
            </S.Content>
        </S.Container>
    )
};