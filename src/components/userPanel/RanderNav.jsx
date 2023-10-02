import React from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

const RanderNav = ({ item, isOpenState, setIsOpenState, toggleDropdown }) => {
    // const adtoggleDropdown = () => {
    //     const updatedIsOpenState = isOpenState.map((isOpen, index) =>
    //         index === item.id ? !isOpen : false
    //     );
    //     setIsOpenState(updatedIsOpenState);
    //     console.log(isOpenState);
    //     toggleDropdown();
    // };
    // const [isOpenDrop,setOpenDrop] = useState(false); 

    // const location = useLocation();
    // console.log(location.pathname);

    return (
        <>
            {item.submenu ? (
                <li className="dropdown_menu">
                    <button onClick={toggleDropdown}>
                        <span>
                            <span> {item.icon} </span>
                            {item.title}
                        </span>
                        <HiChevronDown />
                    </button>
                    {isOpenState[item.id] && (
                        <ul className="submenu">
                            {item.submenu.map(subLink => (
                                <li key={subLink.id}>
                                    <NavLink to={subLink.route}>{subLink.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    )}

                </li>
            ) : (
                <li>
                    <NavLink to={item.route}>
                        <span>{item.icon}</span>
                        {item.title}
                    </NavLink>
                </li>
            )}
        </>
    );
};

export default RanderNav;
