import NavItem from "./NavItem";


const MainNav = () => {
    return (
        <section className='md:border-r  w-80 bg-white'>
            <nav className='flex flex-col gap-2 p-2 text-xl'>
                <NavItem
                    exact
                    activeClassName='!bg-sky-100 !text-sky-700'
                    className='hover:bg-gray-100 flex items-center gap-4 px-4 py-3 rounded-lg'
                    href='/'
                >
                    {/* <Icon
                        className='text-xl'
                        icon={IconNames.DASHBOARD}
                    />{' '} */}
                    Dashboard
                </NavItem> 
                <NavItem
                    activeClassName='!bg-sky-100 !text-sky-700'
                    className='hover:bg-gray-100 flex items-center gap-4 px-4 py-3 rounded-lg'
                    href='/member'
                >
                    {/* <Icon
                        className='text-xl'
                        icon={IconNames.MEMBERS}
                    />{' '} */}
                    Members
                </NavItem>
            </nav>
        </section>
    );
};

export default MainNav;
