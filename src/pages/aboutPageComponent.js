import React from 'react'
import { Helmet } from 'react-helmet';

export default function About() {

    const clickMethod = () => {
        console.log('JS is running')
    }

    const head = () => {
        return (
            <Helmet>
                <title>About Page</title>
            </Helmet>
        )
    }

    return (
        <div>
            {head()}
            <h1>This is my About page</h1>
            <p>This is a content</p>
            <button onClick={() => clickMethod()}>Console log some text</button>
        </div>
    )
}
