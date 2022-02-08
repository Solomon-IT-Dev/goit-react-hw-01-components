import PropTypes from 'prop-types';
import defaultImage from './default.png';
import s from './FriendListItem.module.css';

export default function FriendListItem(props) {
    const { avatar, name, isOnline } = props;
    return (
        <li className="item">
            <span className="status" style={isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
            <img className="avatar" src={avatar ?? defaultImage} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};