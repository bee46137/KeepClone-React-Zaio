import "./Navbar.css";

const Navbar = () => {
    return (
    <nav>
        <div className="logo-area">
    
            <div className="tooltip">
                <span className="material-symbols-outlined hover">
                    menu
                </span>
                <span className="tooltip-text">Main Menu</span>
            </div>
            
            <div className="logo">
                <img className="gb_Ec gb_be" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" aria-hidden="true" role="presentation"  />
                <span className="logo-text">Keep</span>
            </div>
        </div>

        <div className="search-area">
            <div className="tooltip">
                <span className="material-symbols-outlined hover">
                    search
                </span>
                <span className="tooltip-text">Search</span>
            </div>
            
            <input type="text" placeholder="Search"/>
        </div>

        
        <div className="settings">
            <div className="tooltip">
                <span className="material-symbols-outlined hover">
                    refresh
                </span>
                <span className="tooltip-text">Refresh</span>
            </div>
            <div className="tooltip">
                <span className="material-symbols-outlined hover">
                    view_agenda
                </span>
                <span className="tooltip-text">List view</span>
            </div>
            <div className="tooltip">
                <span className="material-symbols-outlined hover">
                    settings
                </span>
                <span className="tooltip-text">Settings</span>
            </div>
              
        </div>
        
        <div className="profile-actions">
            <div className="tooltip">
                <span className="material-symbols-outlined hover">
                    apps
                </span>
                <span className="tooltip-text">Apps</span>
            </div>
            <span className="material-symbols-outlined">
                account_circle
            </span>
        </div>
    </nav>

    )
}
export default Navbar;