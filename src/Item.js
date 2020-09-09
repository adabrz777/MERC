import React from 'react';

class Item extends React.Component {
    delete = () => {
        this.props.delete(this.props.nr);
    } 

    render() {
        const {value, currency} = this.props;

        return ( 
            <li>
                <span>{value} {currency}</span> <span onClick={this.delete}>X</span>
            </li>
        );
    }
}
 
export default Item;