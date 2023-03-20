import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();
    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <div>Произошла ошибка</div>
            <Button onClick={reload} theme={ButtonTheme.OUTLINE}>{t('Reload')}</Button>
        </div>
    );
};

export default ErrorPage;
