import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import Layout from "./components/App.jsx";

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const jsx = ( <Layout /> );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );

app.listen( 2048 );

function htmlTemplate( reactDom ) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Fedora Magazine - Guides, information, and news about the Fedora operating system for users, developers, system administrators, and community members.</title>
        </head>
        <body  style='size: 100%; margin: 0%; padding: 0%; font-family: "Open sans", helvetica, arial; background-color: #DEDEDE;'>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
    </html>
    `;
}