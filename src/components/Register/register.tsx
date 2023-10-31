import { useState } from "react"

interface registerProps{
    setLogin: Function,
    contribuitorOptions: string[],

}


export default function Register(props:registerProps){

    const [selectedContributor,setSelectedContributor] = useState('')



    return(
        <div className='login_wrapper'>
            <div className="buttons">
            {/* <button className='mode_button' onClick={() => setLoginMode("login")}>login</button>
            <button className='mode_button' onClick={() => setLoginMode("cadastro")}>Cadastro</button> */}
            </div>
            <h1>Cadastro</h1>
            <hr></hr>
            <form>
                <div className='input_wrapper'>
                    <label htmlFor='input_email'>Email institucional</label>
                    <input placeholder='digite seu email' id='input_email'></input>
                </div>
                <div className='input_wrapper'>
                    <label htmlFor="responsavel">Responsavel</label>
                        <select className='dropdown_wrapper' id="contribuidores" value={selectedContributor} onChange={(e) => setSelectedContributor(e.target.value)}>
                            <option value="">selecione um Responsavel</option>
                            {props.contribuitorOptions.map((contributor, index) => (
                                <option key={index} value={contributor}>
                                {contributor}
                                </option>
                            ))}
                            
                        </select>

                </div>
                
                <div className='input_wrapper'>
                    <label htmlFor='input_senha'>Senha</label>
                    <input placeholder='digite sua senha' id='input_senha'></input>
                </div>
                <div className='input_wrapper'>
                    <label htmlFor='input_senha'>Confirmar Senha</label>
                    <input placeholder='digite sua senha' id='input_senha'></input>
                </div>
                <div className='paragraph'>
                    <p>Já tem uma conta? <span onClick={() => props.setLogin("login")}>Fazer login</span></p>
                </div>            
                <button>Cadastrar</button>
            </form>
        </div>
    )
}