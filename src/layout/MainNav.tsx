import NavItem from "./NavItem";


const MainNav = () => {
    return (
        <section className='md:border-r w-80 bg-white'>
            <nav className='flex flex-col gap-2 p-2 text-xl border-t'>
                <NavItem
                    exact
                    activeClassName='!bg-blue-100 !text-blue-600'
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
                    activeClassName='!bg-blue-100 !text-blue-600'
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
