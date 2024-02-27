import PropTypes from 'prop-types';
import clsx from 'clsx';

const Cells = ({ onClick,className,children }) => {

    return <div onClick={onClick} className={clsx("cal",className)}>{children}</div>;
    
};
Cells.propTypes = {
    onClick: PropTypes.any,
    className: PropTypes.any,
    children: PropTypes.any,
};

export default Cells;