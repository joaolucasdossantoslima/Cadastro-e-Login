import { Link } from "react-router-dom"
import "./Home.css"


export default function Home() {
    return (
        <div className="Bts">
            <ul id="HomeUl">
                <Link to='/Cadastro'><li><button className="BT"><strong>Cadastrar-se</strong></button></li></Link>
                <Link to='/Login'><li><button className="BT">Login</button></li></Link>
            </ul>
        </div>
    )
}