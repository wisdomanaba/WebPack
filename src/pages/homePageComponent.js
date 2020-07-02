import React from 'react'
import { Helmet } from 'react-helmet';

export default function Home() {

    const clickMethod = () => {
        console.log('JS is running')
    }

    const head = () => {
        return (
            <Helmet>
                <title>Home Title</title>
            </Helmet>
        )
    }

    return (
        <div>
            {head()}
            <h1>This is my home page</h1>
            <p>This is a content</p>
            <button onClick={() => clickMethod()}>Console log some text</button>
        </div>
    )
}
