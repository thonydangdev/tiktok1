import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
// const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.emptyImage, ...props }, ref) => {
//     const [fallback, setFallback] = useState('');

//     const handleError = () => {
//         setFallback(customFallback);
//     };
//     return (
//         <img
//             className={cx('wrapper', className)}
//             ref={ref}
//             src={fallback || src}
//             alt={alt}
//             {...props}
//             onError={handleError}
//         />
//     );
// });
function Image({ className, src, alt, fallback: customFallback = images.emptyImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
