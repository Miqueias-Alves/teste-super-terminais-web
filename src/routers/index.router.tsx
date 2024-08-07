import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import DefaultLayout from '../layouts/DefaltLayout'
import { CompanyPage } from '../pages/company/CompanyPage'

export const routers = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path='/'
                id='root'
                element={<DefaultLayout />}
            >
                <Route>
                    <Route
                        index
                        element={<>Home</>}
                    />
                    <Route
                        path='company'
                        element={<CompanyPage />}
                    />
                    <Route
                        path='admin-company'
                        element={<>Administrção Page</>}
                    />
                </Route>
            </Route>
        </>
    )
)