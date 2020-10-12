import React from 'react';

class Item extends React.Component {
    deleteItem = () => {
        this.props.deleteItem(this.props.nr);
    } 

    render() {
        const {value, currency} = this.props;

        return ( 
            <li>
                <span>{value} {currency}</span> <span onClick={this.deleteItem}>X</span>
            </li>
        );
    }
}
 
export default Item;