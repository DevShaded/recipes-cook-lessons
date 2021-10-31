import Head from 'next/head'
import Header from "../components/header";
import Menu from "../components/menu";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Recipes And Cook - Home</title>
                <link rel="icon" href="/favicon.ico"/>

                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
                      rel="stylesheet"/>
            </Head>

            <Header title="One Step to Making a Good Start"
                    description="Mauris fermentum tortor non enim aliquet condimentum. Nam aliquam pretium feugiat. Duis sem est, viverra eu interdum ac, suscipit nec mauris. Suspendisse commodo tempor sagittis! In justo est, sollicitudin eu scelerisque pretium, placerat eget elit."/>

            <Menu menuTitle="OUR MENU" title="Delicious From The Chef" />
        </div>
    )
}
