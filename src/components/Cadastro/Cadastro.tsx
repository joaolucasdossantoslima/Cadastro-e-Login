import { Link } from "react-router-dom"
import "./Cadastro.css"

export default function Cadastro() {
    return (
        <div className="campo">
            <ul className="UL">
                <li>
                    <div>
                        <label htmlFor="">Nome</label>
                    </div>
                    <input type="text" minLength={10} id="Name"/>
                    <span id="Nome_err"></span>
                </li>

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

                <li>
                    <div>
                        <label htmlFor="">Data de Nascimento</label>

                    </div>                
                    <input type="date" />
                    <span id="Data_err"></span>
                </li>


                <Link to='/'><button className="BT" id="voltar">voltar</button></Link>
                <button className="BT">Cadastra</button>
                <span></span>
            </ul>
        </div>
    )
}