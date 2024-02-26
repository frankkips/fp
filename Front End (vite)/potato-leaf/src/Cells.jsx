import PropTypes from 'prop-types';
import clsx from 'clsx';

const Cells = ({ className,children }) => {






    Cells.propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
    };
    return <div className={clsx("cal",className)}>{children}</div>;
    
};

export default Cells;