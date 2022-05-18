import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import React, { useState } from 'react';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            headertitle: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const [currentUser, setCurrentUser] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, []);
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/',
            onClick: (e) => {
                setCurrentUser(false);
            },
            separate: true,
        },
    ];

    // const handleChangeItem = (menuItem) => {
    //     console.log(menuItem);
    // };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy trigger="click" delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('user-actions')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy trigger="click" delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('user-actions')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy trigger="click" delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('user-actions')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1652770800&x-signature=Q%2BkGh%2FGtL5XgpIAfBMGxT1jPI3Q%3D"
                                alt="Nguyen Van A"
                                // fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7098172132614078470~c5_720x720.jpeg?x-expires=1652842800&x-signature=XSctdGoZDgBEl7f4vqTmP0lYLVY%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
