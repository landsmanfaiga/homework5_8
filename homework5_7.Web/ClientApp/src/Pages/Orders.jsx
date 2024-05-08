import { useEffect, useState } from 'react';
import axios from 'axios';
import CheesecakeRow from './CheesecakeRow';

const Orders = () => {
    const [Cheesecakes, setCheesecakes] = useState([]);
    useEffect(() => {
        const getCheesecakes = async () => {
            const { data } = await axios.get('/api/cheesecake/getall');
            setCheesecakes(data);
        }

        getCheesecakes();
    }, []);
    console.log(Cheesecakes);

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
                        {Cheesecakes.map(cheesecake => <CheesecakeRow Cheesecake={cheesecake} key={cheesecake.Id}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Orders;
