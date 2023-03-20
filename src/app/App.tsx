import { Suspense } from 'react';
import { AppRouter } from './providers/AppRouter';

import './styles/index.scss';

const App = () => (
    <div
        className="app"
    >
        <Suspense fallback="">
            <div className="content-page">
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
