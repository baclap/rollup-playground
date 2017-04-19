import React from 'react';
import styles from './style.scss';

console.log(styles)

const Component = React.Component;
const PropTypes = React.PropTypes;

export default class Button extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <button onClick={this.props.onClick} className={styles.blue}>{this.props.children}</button>
            </div>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};
