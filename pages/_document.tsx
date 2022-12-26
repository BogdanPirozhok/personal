import {
    Html, Head, Main, NextScript
} from 'next/document';

export default function Document() {
    return (
        <Html lang="en" className="bg-primary-dark">
            <Head>
                <title>Богдан Пирожок. Fullstack web developer</title>
            </Head>
            <body>
                <Main />
                <NextScript/>
            </body>
        </Html>
    );
}
