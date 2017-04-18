import React from 'react';
// import styles from './style.scss';

const Component = React.Component;
const PropTypes = React.PropTypes;

export default class Button2 extends Component {
    render() {
        return (
            // <button onClick={this.props.onClick} className={styles}>{this.props.children}</button>
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

Button2.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};
