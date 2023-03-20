import {
    FC, useMemo, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import Plus from 'shared/assets/collection/plus.svg';
import Wrench from 'shared/assets/collection/wrench.svg';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal';
import PointForm, { NewPoint } from './PointForm';

import cls from './PointsTable.module.scss';

export enum PointStatus {
    ACTIVE = 'active',
    DISABLED = 'disabled'
}

export type Point = {
    id: number;
    address: string;
    title: string;
    office: string;
    weekends: boolean;
    status: PointStatus;
    startDate: string;
    finishDate?: string;
}

interface IPointsTable {
    points: Point[];
    selectedPoints?: Point[];
    onPointClick?: (point: Point) => void;
    onPointSelect?: (point: Point) => void;
    onPointSave?: (point: NewPoint) => void;
}

const PointsTable: FC<IPointsTable> = (props) => {
    const { t } = useTranslation();
    const {
        points, onPointSelect, onPointClick, selectedPoints = [], onPointSave,
    } = props;
    const [isOpenConfig, setIsOpenConfig] = useState(false);
    const [isOpenNew, setIsOpenNew] = useState(false);

    const configHandler = () => {
        setIsOpenConfig(true);
    };

    const createHandler = () => {
        setIsOpenNew(true);
    };

    const pointSaveHandler = (point: NewPoint) => {
        if (onPointSave) {
            onPointSave(point);
        }
        setIsOpenNew(false);
    };

    const pointClickHandler = (point: Point) => {
        if (onPointClick) {
            onPointClick(point);
        }
    };
    const pointSelectHandler = (point: Point) => {
        if (onPointSelect) {
            onPointSelect(point);
        }
    };

    const table = useMemo(() => {
        const head = (
            <tr>
                <th>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        size={ButtonSize.M}
                        onClick={configHandler}
                    >
                        <Wrench className={cls.icon} width="30px" height="30px" />
                    </Button>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        size={ButtonSize.M}
                        onClick={createHandler}
                    >
                        <Plus className={cls.icon} width="30px" height="30px" />
                    </Button>
                </th>
                <th>Адрес</th>
                <th>Офис</th>
                <th>Вывеска</th>
                <th>Ковер</th>
                <th>Статус</th>
                <th>Тариф</th>
                <th colSpan={2}>Действует с/по</th>
                <th>Дни</th>
                <th>Интервал</th>
                <th>Порядок</th>
                <th>д н в с</th>
                <th>Поставок в неделю</th>
                <th>Код счета</th>
                <th>Комплектность</th>
                <th>Пропуск</th>
                <th>Примечание</th>
            </tr>
        );
        const body = points.length === 0 ? <tr><td colSpan={4}>Точки отсутствуют</td></tr>

            : points.map((point) => (
                <tr className={cls.hover} key={point.id} onClick={() => pointClickHandler(point)}>
                    <td style={{ textAlign: 'center' }}>
                        <input
                            type="checkbox"
                            checked={selectedPoints.indexOf(point) >= 0}
                            onChange={() => { pointSelectHandler(point); }}
                        />
                    </td>
                    <td>
                        {point.address}
                    </td>
                    <td>
                        {point.office}
                    </td>
                    <td>
                        {point.title}
                    </td>
                    <td />
                    <td>
                        {t(`point_status_${point.status}`)}
                    </td>
                    <td />
                    <td>{point.startDate}</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                </tr>
            ));
        return (

            <table className={cls.table} cellPadding={0} cellSpacing="2">
                <thead>{head}</thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        );
    }, [points, selectedPoints]);

    return (
        <div>
            <Modal isOpen={isOpenConfig} onClose={() => setIsOpenConfig(false)}>
                Настройка столбцов
            </Modal>
            <Modal isOpen={isOpenNew} onClose={() => setIsOpenConfig(false)}>
                <PointForm onSave={pointSaveHandler} />
            </Modal>
            <div className={cls.PointsTable}>
                {table}
            </div>
        </div>
    );
};

export default PointsTable;
