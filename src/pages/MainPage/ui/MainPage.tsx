// import { useTranslation } from 'react-i18next';
import API from 'app/api';
import { useEffect, useState } from 'react';
import { Client, ClientCard } from 'widgets/ClientCard';
import { Contract } from 'widgets/ContractCard';
import { Point, PointsTable } from 'widgets/PointsTable';
import { NewPoint } from 'widgets/PointsTable/ui/PointForm';
import { PointStatus } from 'widgets/PointsTable/ui/PointsTable';
import cls from './MainPage.module.scss';

const MainPage = () => {
    // const { t } = useTranslation('main');
    const [client, setClient] = useState<Client>(null);
    const [points, setPoints] = useState<Point[]>([]);
    const [point, setPoint] = useState<Point>(null);
    const [contract, setContract] = useState<Contract>(null);
    const [selectedPoints, setSelectedPoints] = useState<Point[]>([]);

    const onPointSelect = (point: Point) => {
        let newSelectedPoints = [];
        if (selectedPoints.indexOf(point) >= 0) {
            newSelectedPoints = selectedPoints.filter((p) => +p.id !== +point.id);
        } else {
            newSelectedPoints = [...selectedPoints, point];
        }
        setSelectedPoints(newSelectedPoints);
    };

    const onPointClick = (point: Point) => {
        setPoint(point);
    };
    const onPointSave = (point: NewPoint) => {
        const addingPoint: Point = {
            address: point.address || '',
            id: points.reduce((a, p) => (+a > +p.id ? a : p.id), 0) + 1,
            office: point.office || '',
            startDate: point.startDate || '',
            finishDate: point.finishDate || '',
            status: point.status || PointStatus.ACTIVE,
            title: point.title || '',
            weekends: point.weekends || false,
        };
        setPoints([
            ...points,
            addingPoint,
        ]);
    };

    useEffect(() => {
        (async () => {
            const client = await API.get(['clients/1']) as Client;
            setClient(client);
        })();
    }, []);
    useEffect(() => {
        (async () => {
            if (client) {
                const points = await API.get([`points?clientId=${client.id}`]) as Point[];
                setPoints(points);
                const contracts = await API.get([`contracts?clientId=${client.id}`]) as Contract[];
                setContract(contracts[0]);
            }
        })();
    }, [client]);

    return (
        <div className={cls.MainPage}>
            <ClientCard client={client} contract={contract} />
            <PointsTable
                points={points}
                selectedPoints={selectedPoints}
                onPointSelect={onPointSelect}
                onPointClick={onPointClick}
                onPointSave={onPointSave}
            />
            {point && <div>{JSON.stringify(point)}</div>}
        </div>
    );
};

export default MainPage;
