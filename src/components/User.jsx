import PropTypes from 'prop-types';
import { useContext } from 'react';
import { DataContext } from '../main';



const User = () => {
    const data = useContext(DataContext)
    return (
        <div>
            {
                data.map((p, idx) => <p key={idx}>{p.name}</p>)
            }
        </div>
    );
};

export default User;



User.propTypes = {
    data: PropTypes.array
};

