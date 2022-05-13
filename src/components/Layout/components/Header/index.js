import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import React from 'react';
import { FontAwesomeIcon, spinPulse } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faMagnifyingGlass, faEllipsisVertical, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
console.log(images);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <div className={cx('search')}>
                    <input placeholder="Search this account" type="text" />
                    <button className={cx('close')}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
        </header>
    );
}

export default Header;
