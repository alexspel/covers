import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export interface componentRenderOptioins {
    route?: string;
}

const componentRender = (component: ReactNode, options: componentRenderOptioins = {}) => {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};

export default componentRender;
