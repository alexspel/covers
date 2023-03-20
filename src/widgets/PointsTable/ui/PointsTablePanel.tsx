import { FC } from 'react';
import { Point } from 'widgets/PointsTable';
import cls from './PointsTablePanel.module.scss';

interface PointsTablePanelProps {
    points: Point[];
}
const PointsTablePanel:FC<PointsTablePanelProps> = (props) => {
    const {
        points = [],
    } = props;

    return <div className={cls.PointsTablePanel}>{points.length}</div>;
};

export default PointsTablePanel;
