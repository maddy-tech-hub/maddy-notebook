import FormHandle from './Practice/ReactConcepts/FormHandle';
import HoC from './Practice/ReactConcepts/HoC';
import HooksExample from './Practice/ReactConcepts/HooksExample';
import { ReduxStore } from './Practice/ReactConcepts/ReduxStore';
import Routers from './Practice/ReactConcepts/Routers';
import './App.scss';
import { ContextProvider, ContextChild } from './Practice/ReactConcepts/Context';
import { PaginationExample } from './Practice/ReactConcepts/Pagination';
import { SearchFilter } from './Practice/ReactConcepts/SearchFilter';
import { RouterProvider } from 'react-router-dom';
import { router } from './Practice/ReactConcepts/RouterProvider';

const App = () => {
    
    return (
        <div className="grid-container">
            <div className="grid-item">
                <h1>React Routers</h1>
                {/* <Routers /> */}
                <RouterProvider router={router} />
            </div>

            <div className="grid-item">
                <h1>React Higher-Order Components (HoC)</h1>
                <HoC isLogin={true} name='Madhava Reddy Vemireddy' />
            </div>

            <div className="grid-item">
                <h1>React Context</h1>
                <ContextProvider>
                    <ContextChild />
                </ContextProvider>
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
            <div className="grid-item">
                <h1>Pagination</h1>
                <PaginationExample />
            </div>
            <div className="grid-item">
                <h1>Pagination</h1>
                <SearchFilter />
            </div>
        </div>
    );
}

export default App
