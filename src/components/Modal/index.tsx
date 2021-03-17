import React, { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import * as S from './style';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { api } from '../../services/api';

interface ModalProps{
    isOpen: boolean;
    onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: ModalProps) => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type,setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        }

        api.post(`transactions`, data);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button onClick={onRequestClose} className="react-modal-open" type="button">
                <img src={close} alt="Botão que fecha o modal"/>
            </button>

            <S.ContainerForm onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Nome" />
                <input value={value} onChange={e => setValue(+e.target.value)} type="number" placeholder="valor" />

                <S.TransactionContainerTypes>
                    <S.Button isActive={type === 'deposit'}
                        activeColor="green"
                        onClick={() => setType('deposit')} type="button">
                        
                        <img src={income} alt="income" />
                        <span>
                            Entrada
                        </span>
                    </S.Button>
                    <S.Button
                        activeColor="red"
                        isActive={type === 'withdraw'} onClick={() => setType('withdraw')} type="button">
                        <img src={outcome} alt="income" />
                        <span>
                            Saída
                        </span>
                    </S.Button>
                </S.TransactionContainerTypes>
                
                <input value={category} onChange={e => setCategory(e.target.value)} placeholder="categoria" />
                
                <button type="submit">Cadastrar</button>
            </S.ContainerForm>
      </Modal>
    );
}