import PropTypes from 'prop-types';

export default function Container(props) {
    return (<div className="container">{props.children}</div>);
};

Container.propTypes = {
    children: PropTypes.node,
};