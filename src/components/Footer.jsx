export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="f_header">
                    <a href="#" className="footer_logo">
                        NOICELAND
                    </a>

                    <p className="copywright">© 2018 Noiceland™, all rights reserved</p>
                </div>

                <div className="f_double">
                    <p className="category c1">Categories</p>

                    <p className="category">Subscribe to newsletter</p>
                </div>

                <div className="f_body1">

                    <div className="f_w1">

                        <ul className="f_list">
                            <li><a href="#" className="f_link">Animation</a></li>
                            <li><a href="#" className="f_link">Interactive Design</a></li>
                        </ul>

                        <ul className="f_list">
                            <li><a href="#" className="f_link">Architecture</a></li>
                            <li><a href="#" className="f_link">Miscellaneous</a></li>
                        </ul>

                        <ul className="f_list">
                            <li><a href="#" className="f_link">Graphic Design</a></li>
                            <li><a href="#" className="f_link">Photography</a></li>
                        </ul>

                        <ul className="f_list">
                            <li><a href="#" className="f_link">Illustration</a></li>
                            <li><a href="#" className="f_link">Product Design</a></li>
                        </ul>
                    </div>
                    <div>
                        <input type="email" placeholder="Email address" />
                    </div>
                </div>

                <div className="f_body2">
                    <ul className="f_list2">
                        <p className="category">Information</p>
                        <li><a href="#" className="f_link">about</a></li>
                        <li><a href="#" className="f_link">contact</a></li>
                        <li><a href="#" className="f_link">terms</a></li>
                    </ul>

                    <ul className="f_list2">
                        <p className="category">follow us</p>
                        <li><a href="#" className="f_link">instagram</a></li>
                        <li><a href="#" className="f_link">facebook</a></li>
                        <li><a href="#" className="f_link">twitter</a></li>
                    </ul>

                    <ul className="f_list2">
                        <p className="category">Template</p>
                        <li><a href="#" className="f_link">Image License Info</a></li>
                        <li><a href="#" className="f_link">Powered by Webflow</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
