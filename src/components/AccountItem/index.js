import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const { full_name, nickname, avatar, tick } = data;
    return (
        <Link to={`/@${nickname}`} className={cx('wrapper')}>
            <Image src={avatar} alt={full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{full_name}</span>
                    {tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('iconcheck')} />}
                </p>
                <span className={cx('username')}>{nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
