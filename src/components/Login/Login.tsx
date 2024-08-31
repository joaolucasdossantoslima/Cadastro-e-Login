import { Link } from "react-router-dom"
import "./Login.css"

export default function Login(){
    return(
        <div className="campo">
            <ul className="UL">
            <li>
                    <div>
                        <label htmlFor="">Email</label>
                    </div>
                    <input type="email" />
                    <span id="Email_err"></span>
                </li>

                <li>
                    <div>
                        <label htmlFor="">Senha</label>
                    </div>
                    <input type="password" minLength={8} id="Password"/>
                    <span id="id_err"></span>
                </li>

                <Link to='/'><button className="BT" id="voltar">voltar</button></Link>
                <button className="BT">Login</button>
            </ul>
        </div>
    )
}