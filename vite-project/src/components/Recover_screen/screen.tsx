import './screen.scss'

export function Recovery_screen() {
    return (
      <>
      <h1 className='titulo'>Recuperar Acesso</h1>
      <form>
        <div className='input_wrapper'>
            <label htmlFor='input_email'>Nova senha:</label>
            <input placeholder='digite seu email' id='input_email'></input>
        </div>
        <div className='input_wrapper'>
            <label htmlFor='input_senha'>Comfirmação de senha:</label>
            <input placeholder='digite sua senha' id='input_senha'></input>
        </div>
      </form>
      </> 
    )
}