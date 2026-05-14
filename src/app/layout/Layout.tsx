import { NavLink, Outlet } from 'react-router';
import Logo from '../../assets/images/logo-dbz.webp';
import { Moon } from 'lucide-react';
export const Layout = () => {
    return (
        <main className="container-main">
            <nav className="flex items-center justify-between text-center border border-light py-2 px-4 rounded-full sticky top-5 my-5 backdrop-blur-xs bg-surface-light/50 dark:bg-surface-dark/50 z-999">
                <a href="/">
                    <figure>
                        <img src={Logo} alt="Logo DBZ" className="object-cover max-w-16" />
                    </figure>
                </a>
                <div className="flex items-center gap-4">
                    <ul>
                        <li className="space-x-4">
                            <NavLink to="/" className="hover:text-primary">
                                Caracteristicas
                            </NavLink>
                            <NavLink to="/" className="hover:text-primary">
                                Planetas
                            </NavLink>
                        </li>
                    </ul>
                    <button type="button" className="cursor-pointer hover:text-primary">
                        {/*  <Sun /> */}
                        <Moon />
                    </button>
                </div>
            </nav>
            <Outlet />

            <footer>footer</footer>
        </main>
    );
};
