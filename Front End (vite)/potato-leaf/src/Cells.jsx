import PropTypes from 'prop-types';
import clsx from 'clsx';

const Cells = ({ onclick,className,children }) => {
    





    Cells.propTypes = {
        onclick: PropTypes.any,
        className: PropTypes.any,
        children: PropTypes.any,
    };
    return <div onClick={onclick} className={clsx("cal",className)}>{children}</div>;
    
};

export default Cells;