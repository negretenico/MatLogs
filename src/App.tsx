import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClientProvider, useQuery} from "@tanstack/react-query";
import queryClient from "./query/client";
import {ToastContainer} from "react-toastify";
import {QUERY_KEYS} from "./query/keys";
import {QUERY_FUNCTIONS} from "./query/functions";

// TODO: Remove this upon actual development of the pages
const StartComponent = () => {
    useQuery({
        queryKey: QUERY_KEYS.get.all,
        queryFn: QUERY_FUNCTIONS.get.all,
        retry: 2
    });
    const {data} = useQuery({
        queryKey: QUERY_KEYS.get.individual,
        queryFn: () => QUERY_FUNCTIONS.get.individual('x_guard')
    })
    console.log(data)
    return <>
        Hii! :D
    </>
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename={'/MatLogs'}>
                <div className={'App'}>
                    {/*TODO: make this come from a configuration*/}
                    <ToastContainer position="top-right" autoClose={2000}/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<StartComponent/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </BrowserRouter>
        </QueryClientProvider>

    );
}

export default App;
