import {
    ChangeEvent, FC, useState
} from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './PointForm.module.scss';
import { Point, PointStatus } from './PointsTable';

const addresses = [
    { id: 1, value: 'Союз печатников, дом 25A' },
    { id: 2, value: 'Союз печатников, дом 25Б' },
];

const covers = [
    { id: 1, value: 'Ковер 1' },
    { id: 2, value: 'Ковер 2' },
];

export type NewPoint = {
    address?: string;
    title?: string;
    office?: string;
    status?: PointStatus;
    weekends?: boolean;
    cover?: any;
    amount?: number;
    startDate?: string;
    finishDate?: string;
};

interface PointFormProps {
    point?: Point;
    onSave?: (newPoint: NewPoint) => void;
}

const PointForm: FC<PointFormProps> = (props) => {
    const {
        onSave,
    } = props;
    const [newPoint, setNewPoint] = useState<NewPoint>({});

    const submit = (e: any) => {
        e.preventDefault();
    };

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewPoint({
            ...newPoint,
            [name]: value,
        });
    };

    const onSaveClick = () => {
        if (onSave) {
            onSave(newPoint);
        }
    };

    return (
        <form onSubmit={submit} className={cls.PointForm}>
            <div className={cls.formInput}>
                <span>Адрес:</span>
                <select
                    value={newPoint.address}
                    name="address"
                    onChange={onChange}
                >
                    <option
                        value={0}
                        disabled
                        selected
                    >
                        Выберите значение
                    </option>
                    {addresses.map((a) => <option key={a.id} value={a.value}>{a.value}</option>)}
                </select>
            </div>
            <div className={cls.formInput}>
                <span>Ковер:</span>
                <select
                    value={newPoint.cover}
                    name="cover"
                    onChange={onChange}
                >
                    <option
                        value={0}
                        disabled
                        selected
                    >
                        Выберите значение
                    </option>
                    {covers.map((a) => <option key={a.id} value={a.value}>{a.value}</option>)}
                </select>
            </div>
            <div className={cls.formInput}>
                <span>Количество:</span>
                <input
                    type="text"
                    name="amount"
                    onChange={onChange}
                    placeholder="Введите количество"
                    value={newPoint.amount}
                />
            </div>
            <div className={cls.actions}>
                <Button onClick={onSaveClick}>Save</Button>
            </div>
        </form>
    );
};

export default PointForm;
