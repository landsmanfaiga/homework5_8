
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dayjs from "dayjs";

const OneOrder = () => {
    const { personId } = useParams();
    const [cheesecake, setCheesecake] = useState({
        Id: '',
        Name: '',
        Email: '',
        BaseFlavor: '',
        Toppings: '',
        SpecialRequests: '',
        Quantity: '',
        DeliveryDate: '',
        Total: ''
    });
    useEffect(() => {
        const getCheesecake = async () => {
            const { data } = await axios.get('/api/peoplecars/getone', personId);
            setCheesecake(data);
        }

        getCheesecake();
    }, []);
    const { Id, Name, Email, BaseFlavor, Toppings, SpecialRequests, Quantity, DeliveryDate, Total } = cheesecake;
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="card text-center shadow p-3 mb-5 bg-body rounded">
                    <div className="card-body">
                        <h3 className="card-title fw-bold">{Name}</h3>
                        <p className="card-text fs-5">{Email}</p>
                        <p className="card-text fs-5">{BaseFlavor}</p>
                        <p className="card-text fs-5">{Toppings}</p>
                        <p className="card-text fs-5">{SpecialRequests}</p>
                        <p className="card-text fs-5">2</p>
                        <p className="card-text fs-5">{dayjs(DeliveryDate).format("MM/DD/YYYY")}</p>
                        <p className="card-text fs-5">{Total}</p>
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

