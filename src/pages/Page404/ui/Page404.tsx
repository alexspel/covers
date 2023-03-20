import { useTranslation } from 'react-i18next';

const Page404 = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('Page not found')}</h1>
        </div>
    );
};

export default Page404;
