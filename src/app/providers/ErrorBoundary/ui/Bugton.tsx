import {
    FC, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface BugtonProps {
    short?: boolean;
}
// Компонент для тестирования
const Bugton: FC<BugtonProps> = ({ short }) => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            theme={ButtonTheme.OUTLINE}
        >
            {t(short ? 'Throw error short' : 'Throw error')}
        </Button>
    );
};

export default Bugton;
