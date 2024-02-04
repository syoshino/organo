import './Rodape.css'

const Rodape = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li><a href="facebook.com">
                    <img src='/imagens/fb.png' alt='Facebook'></img>
                </a>
                </li>
                <li><a href="instagram.com">
                    <img src='/imagens/ig.png' alt='Instagram'></img>
                </a>
                </li>
                <li><a href="twitter.com">
                    <img src='/imagens/tw.png' alt='Twitter'></img>
                </a>
                </li>
            </ul>
        </section>
        <section>
            <p>
               <img src='/imagens/logo.png' alt='Logotipo do Organo' ></img>
            </p>
        </section>
    </footer>
    )

}

export default Rodape