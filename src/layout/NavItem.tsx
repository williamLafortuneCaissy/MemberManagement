import { Link, useLocation } from "react-router-dom";


interface AdminMainNavProps {
    exact?:boolean;
    className?: string;
    activeClassName: string;
    href: string;
    children: React.ReactNode;
}

const NavItem = ({ exact, activeClassName, className, href, children }: AdminMainNavProps) => {
    const location = useLocation();
    const pathname = location.pathname;
    const isActive = exact ? pathname === href : pathname.includes(href);

    return (
        <Link
            className={isActive ? `${activeClassName} ${className}` : className}
            to={href}
        >
            {children}
        </Link>
    );
};

export default NavItem;
