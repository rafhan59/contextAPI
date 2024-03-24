import PropTypes from 'prop-types';
import User from "./User";

const Users = () => {
    return (
        <div>
            <User />
        </div>
    );
};

export default Users;

Users.propTypes = {
    data: PropTypes.array
};
