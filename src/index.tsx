import { createRoot } from 'react-dom/client';
import './index.css';
import { Context, Provider } from './ReactConcepts/Context';
import { ReduxStore } from './ReactConcepts/ReduxStore';
import Routers from './ReactConcepts/Routers';
import HoC from './ReactConcepts/HoC';
import HooksExample from './ReactConcepts/HooksExample';
import FormHandle from './ReactConcepts/FormHandle';

const Root = () => {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <h1>React Routers</h1>
                <Routers />
            </div>

            <div className="grid-item">
                <h1>React Higher-Order Components (HoC)</h1>
                <HoC isLogin={true} />
            </div>
            
            <div className="grid-item">
                <h1>React Context</h1>
                <Provider>
                    <Context />
                </Provider>
            </div>

            <div className="grid-item">
                <h1>React Redux Store</h1>
                <ReduxStore />
            </div>

            <div className="grid-item">
                <h1>React Hooks</h1>
                <HooksExample />
            </div>
            <div className="grid-item">
                <h1>React Forms</h1>
                <FormHandle />
            </div>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Root />);

