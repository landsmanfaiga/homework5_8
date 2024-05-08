import React from 'react';
import { Link } from 'react-router-dom';

const CheesecakeRow = ({ cheesecake }) => {
    const { id, name, email, baseFlavor, toppings, specialRequests, quantity, deliveryDate, total } = cheesecake;
    
    return (
            <tr>
                <td>
                    <Link to={`/oneorder/${id}`}>
                        {name} - {email}
                    </Link>
                </td>
                <td>{baseFlavor}</td>
                <td>{toppings}</td>
                <td>{specialRequests}</td>
                <td>{quantity} </td>
                <td>{deliveryDate}</td>
                <td>{total}</td>
            </tr>
        
    )

}
export default CheesecakeRow;