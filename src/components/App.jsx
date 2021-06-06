import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"

function App()
{
    return (
        <div className="app">

            <Header />
            <div className="container">

                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />

            </div>

            <Footer />
        </div>
    );
}

export default App;
