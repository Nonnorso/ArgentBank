import { Link } from 'react-router-dom'
import '../Styles/error404.css'

export default function Error404() {
    
    return (
        <div className="Style404">
            <h1 className="Title404">404</h1>
            <p className="Txt404">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" >Retourner sur la page d’accueil</Link>
        </div>
    )
}

