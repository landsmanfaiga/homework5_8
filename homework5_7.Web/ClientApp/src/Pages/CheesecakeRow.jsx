import React from 'react';
import { Link } from 'react-router-dom';

const CheesecakeRow = ({ cheesecake }) => {
    const { Id, Name, Email, BaseFlavor, Toppings, SpecialRequests, Quantity, DeliveryDate, Total } = cheesecake;
    return (
            <tr>
                <td>
                    <Link to={`/oneorder/${Id}`}>
                        {Name} - {Email}
                    </Link>
                </td>
                <td>{BaseFlavor}</td>
                <td>{Toppings}</td>
                <td>{SpecialRequests}</td>
                <td>{Quantity} </td>
                <td>{DeliveryDate}</td>
                <td>{Total}</td>
            </tr>
        
    )

}
export default CheesecakeRow;