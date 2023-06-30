import logo from './assets/chronometer.png';

export default function Header() {
    return (
        <header>
            <a href="/" className="navbar-brand">
                <img alt="Логотип" className="navbar-icon" src={logo}/>
                <b className="navbar-title">Менеджер времени</b>
            </a>
        </header>
    )
}