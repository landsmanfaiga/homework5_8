
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dayjs from "dayjs";
import axios from 'axios';

const OneOrder = () => {
    const { id } = useParams();
    console.log(id);
    const [cheesecake, setCheesecake] = useState({});
    useEffect(() => {
        const getCheesecake = async () => {
            const { data } = await axios.get(`/api/cheesecake/getone?id=${id}`);
            setCheesecake(data);
            console.log(cheesecake);
        }

        getCheesecake();
    }, []);
    const {name, email, baseFlavor, toppings, specialRequests, quantity, deliveryDate, total } = cheesecake;
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="card text-center shadow p-3 mb-5 bg-body rounded">
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{name}</h3>
                        <p className="card-text fs-5">{email}</p>
                        <p className="card-text fs-5">{baseFlavor}</p>
                        <p className="card-text fs-5">{toppings}</p>
                        <p className="card-text fs-5">{specialRequests}</p>
                        <p className="card-text fs-5">{quantity}</p>
                        <p className="card-text fs-5">{dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                        <p className="card-text fs-5">{total}</p>
                    </div>
                    <Link to="/orders">
                        <button className="btn btn-primary w-100">Back to Orders</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default OneOrder;

