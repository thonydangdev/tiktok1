import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 500]}
            offset={[16, 8]}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-content')}>
                        {history.length > 1 && (
                            <Header
                                title={current.headertitle}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, history.length - 1));
                                }}
                            />
                        )}
                        {current.data.map((item, index) => {
                            const isParent = !!item.children;
                            const isOnClick = !!item.onClick;
                            return (
                                <MenuItem
                                    key={index}
                                    data={item}
                                    onClick={
                                        isOnClick
                                            ? item.onClick
                                            : () => {
                                                  if (isParent) {
                                                      setHistory((prev) => [...prev, item.children]);
                                                  } else {
                                                      onChange(item);
                                                  }
                                              }
                                    }
                                />
                            );
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
