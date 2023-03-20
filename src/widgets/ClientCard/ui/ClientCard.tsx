import { FC } from 'react';
import { Contract, ContractCard } from 'widgets/ContractCard';
import cls from './ClientCard.module.scss';

export type Client = {
    id: number;
    name: string;
    tarif: number;
}

interface ClientCardProps {
    client: Client;
    contract: Contract;
}

const ClientCard:FC<ClientCardProps> = (props) => {
    const { client, contract } = props;
    if (!client) return null;
    return (
        <div className={cls.ClientCard}>
            <div className={cls.header}>
                <div>{client?.name}</div>
                <div>
                    Тариф:
                    {` ${client?.tarif} р.`}
                </div>
            </div>
            <div className={cls.contract}>
                <ContractCard contract={contract} />
            </div>
        </div>
    );
};
export default ClientCard;
