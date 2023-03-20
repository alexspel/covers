import {
    FC, useMemo,
} from 'react';

import cls from './ContractCard.module.scss';

export type Contract = {
    id: number;
    type: string;
    clientId: number;
    conditions: string;
    comments:string;
    startDate: Date;
    finishDate?:Date;
    replaceLimit?: number;
    sumLimit?: number;
}

interface ContractCardProps {
    contract?: Contract;
}

const ContractCard:FC<ContractCardProps> = (props) => {
    const {
        contract,
    } = props;
    const limits = useMemo(() => {
        if (!contract) return null;
        const lim = [
            {
                type: 'count',
                value: contract.replaceLimit,
            }, {
                type: 'amount',
                value: contract.sumLimit,
            },
        ].filter((l) => Boolean(l.value));

        if (lim.length === 0) return null;
        return (
            <div>
                <div>Ограничения:</div>
                {
                    lim.map(({ type, value }) => {
                        const label = type === 'count' ? 'По заменам' : 'По сумме';
                        return (
                            <div key={type}>
                                {`${label}: ${value}`}
                            </div>
                        );
                    })
                }
            </div>
        );
    }, [contract]);

    if (!contract) return <div>Контракт отсутствует</div>;

    return (
        <div className={cls.ContractCard}>
            <div>
                <div>
                    <span className={cls.label}>Номер догвора:</span>
                    {' '}
                    <span className={cls.value}>{contract.id || <i>не указан</i>}</span>
                </div>
                <div>
                    <span className={cls.label}>Тип догвора:</span>
                    {' '}
                    <span className={cls.value}>{contract.type || <i>не указан</i>}</span>
                </div>
                <div>
                    <span className={cls.label}>Дата начала:</span>
                    {' '}
                    {contract.startDate}
                </div>
                <div>
                    <span className={cls.label}>Дата окончания:</span>
                    {' '}
                    <span className={cls.value}>{contract.finishDate || <i>бессрочно</i>}</span>
                </div>
                <div>
                    <span className={cls.label}>Специальные условия догвора:</span>
                    {' '}
                    <span className={cls.value}>{contract.conditions || <i>пусто</i>}</span>
                </div>
                <div>
                    <span className={cls.label}>Комментарий:</span>
                    {' '}
                    <span className={cls.value}>{contract.comments || <i>пусто</i>}</span>
                </div>
            </div>
            <div>
                {limits}
            </div>
        </div>
    );
};

export default ContractCard;
