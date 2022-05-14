import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    rounded = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    totop = false,
    gray = false,
    leftIcon = false,
    rightIcon = false,
    onClick,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    //Remove event when disabled
    Object.keys(props).forEach((key) => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
        }
    });
    const classes = cx('wrapper', {
        primary,
        rounded,
        outline,
        small,
        large,
        text,
        disabled,
        totop,
        gray,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
