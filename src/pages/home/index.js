import { Link } from "react-router-dom";




export default function Index() {
    return(
        <div>
        <main>
            <h1> Home</h1>

            <ul>
                <li> <Link to='/febre'> Febre </Link> </li>

                <li> <Link to='/corPrimaria'> Cor Primária </Link> </li>

                <li> <Link to='/ingressocinema'> Ingresso </Link> </li>

                <li> <Link to='/maior'> Maior Numero </Link> </li>

                <li> <Link to='/frequencia'> Frequencia </Link> </li>

                <li> <Link to='/media'> Media </Link> </li>

                <li> <Link to='/tabuada'> Tabuada </Link> </li>

                <li> <Link to='/soma'> Soma </Link> </li>

                <li> <Link to='/dobro'> Dobro </Link> </li>
            </ul>
        </main>
        </div>
    );
}