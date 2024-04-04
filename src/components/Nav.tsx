import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

export default function Nav (props: any) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className={`nav-link ${props.category === 'business' ? 'active' : ''}`} aria-current="page" onClick={() => props.setCat('business')}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${props.category === 'entertainment' ? 'active' : ''}`} aria-current="page" onClick={() => props.setCat('entertainment')}>Entertainment</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${props.category === 'general' ? 'active' : ''}`} aria-current="page" onClick={() => props.setCat('general')}>General</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${props.category === 'health' ? 'active' : ''}`} aria-current="page" onClick={() => props.setCat('health')}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${props.category === 'science' ? 'active' : ''}`} aria-current="page" onClick={() => props.setCat('science')}>science</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${props.category === 'sports' ? 'active' : ''}`} aria-current="page" onClick={() => props.setCat('sports')}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link ${props.category === 'technology' ? 'active' : ''}`} aria-current="page" onClick={() => props.setCat('technology')}>Technology</div>
                        </li>
                    </ul>
                </div>
                <div className='d-flex gap-2'>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-brightness-high"></i>
                        </button>
                        <ul className="dropdown-menu" style={{minWidth: "auto"}}>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-brightness-high-fill"></i></a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-moon-fill"></i></a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-moon-fill"></i></a></li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}