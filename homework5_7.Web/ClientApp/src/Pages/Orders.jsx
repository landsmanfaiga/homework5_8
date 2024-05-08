import { useEffect, useState } from 'react';
import axios from 'axios';
import CheesecakeRow from './CheesecakeRow';

const Orders = () => {
    const [cheesecakes, setCheesecakes] = useState([]);
    useEffect(() => {
        const getCheesecakes = async () => {
            const { data } = await axios.get('/api/cheesecake/getall');
            setCheesecakes(data);
        }

        getCheesecakes();
    }, []);
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <table className="table text-center shadow-lg">
                    <thead>
                        <tr>
                            <th>Name/Email</th>
                            <th>Base Flavor</th>
                            <th>Toppings</th>
                            <th>Special Requests</th>
                            <th>Quantity</th>
                            <th>Delivery Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cheesecakes.map(cheesecake => <CheesecakeRow cheesecake={cheesecake} key={cheesecake.id}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Orders;
