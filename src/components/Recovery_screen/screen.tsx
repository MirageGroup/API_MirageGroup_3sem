import './recovery_screen.scss'

export function Recovery_screen() {
    return (
      <div className='login_wrapper'>
      <h1 className='titulo'>Recuperar Acesso</h1>
      <form>
        <div className='input_wrapper'>
            <label htmlFor='input_email'>Nova senha:</label>
            <input placeholder='digite seu email' id='input_email'></input>
        </div>
        <div className='input_wrapper'>
            <label htmlFor='input_senha'>Confirmação de senha:</label>
            <input placeholder='digite sua senha' id='input_senha'></input>
        </div>
        <button>Retornar ao Login</button>
      </form>
      </div> 
    )
}