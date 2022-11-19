import { useState } from 'react'
import { ContextProvider } from './contextProvider'
import Result from './components/Result'
import Form from './components/Form'


function App() {

    return (
        <ContextProvider>
            <div className="App">
                <main className="main">
                    <h1 className="title">Password Generator</h1>
                    <Result />
                    <Form />
                </main>
            </div>
        </ContextProvider>
    )
}

export default App
