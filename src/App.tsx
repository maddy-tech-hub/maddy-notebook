import { Context, Provider } from './Practice/ReactConcepts/Context';
import FormHandle from './Practice/ReactConcepts/FormHandle';
import HoC from './Practice/ReactConcepts/HoC';
import HooksExample from './Practice/ReactConcepts/HooksExample';
import { ReduxStore } from './Practice/ReactConcepts/ReduxStore';
import Routers from './Practice/ReactConcepts/Routers';
import './App.scss';

const App = () => {
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
}

export default App
