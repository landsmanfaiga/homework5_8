import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from "dayjs";
import axios from 'axios';

const toppings = ['Chocolate Chips', 'Caramel Drizzle', 'Whipped Cream', 'Pecans', 'Almonds', 'Toasted Coconut', 'Graham Cracker Crumble', 'Cookie Dough', 'Mint Chocolate Chips', 'Caramelized Bananas',
    'Rainbow Sprinkles', 'Powdered Sugar', 'White Chocolate Shavings', 'Peanut Butter Drizzle', 'Dark Chocolate Drizzle'];
const baseFlavors = ['Classic', 'Chocolate', 'Red Velvet', 'Brownie'];


const Order = () => {
    const [cheesecake, setCheesecake] = useState({
        name:'',
        email: '',
        baseFlavor: '',
        toppings: [],
        specialRequests: '',
        quantity: 1,
        deliveryDate: '',
        total: ''
    })
    const navigate = useNavigate();

    const orderTotal = (cheesecake.quantity * 49.99) + (cheesecake.toppings.length * 3.95 * cheesecake.quantity);
   

    const onTextChange = e => {
        const copy = { ...cheesecake };
        copy[e.target.name] = e.target.value;
        setCheesecake(copy);
    }
    const onCheck = topping => {
        let toppingsList = cheesecake.toppings.includes(topping) ? [...cheesecake.toppings.filter(t => t !== topping)] : [...cheesecake.toppings, topping];
        setCheesecake({ ...cheesecake, toppings: toppingsList })
    }

    const onSubmitClick = async () => {
        cheesecake.total = orderTotal;
        cheesecake.toppings = cheesecake.toppings.map(t => ' ' + t).toString();
        await axios.post('/api/cheesecake/addorder', cheesecake);
        navigate('/success');
    }

   
    const isValidOrder = (cheesecake.name && cheesecake.email && cheesecake.deliveryDate);
    return (
        <div className="container">
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name='name' className="form-control" value={cheesecake.name} onChange={onTextChange} />
                    </div>
                    <div className="mb-3">                      
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" value={cheesecake.email} onChange={onTextChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                        <select className="form-select" name="baseFlavor" onChange={onTextChange}>
                            <option>Choose...</option>
                            {baseFlavors.map(flavor => <option key={flavor}>{flavor}</option>) }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                        {toppings.map(topping => <div className="form-check" onChange={() => onCheck(topping)}>
                            <input className="form-check-input" type="checkbox"  />
                            <label className="form-check-label" >{topping}</label>
                        </div>)}                      
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea className="form-control" rows="3" name="specialRequests" onChange={onTextChange} value={cheesecake.specialRequests}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" min="1" value={cheesecake.quantity} name="quantity" onChange={onTextChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input type="date" className="form-control" onChange={onTextChange} value={cheesecake.deliveryDate} name='deliveryDate' />
                    </div>
                    <button type="submit" disabled={isValidOrder ? false : true} className="btn btn-primary" onClick={onSubmitClick}>Submit Order</button>
                </div>
                <div className="col-md-6 position-sticky">
                    <h2 className="mb-4">Live Preview</h2>
                    <div className="card">
                        <img src="/cheesecake.jpg" className="card-img-top" alt="Cheesecake"/>
                            <div className="card-body">
                                <h5 className="card-title">Your Custom Cheesecake</h5>
                            <p className="card-text">Base: {cheesecake.baseFlavor}</p>
                            <p className="card-text">Toppings: {cheesecake.toppings.map(t => ' ' + t).toString()}</p>
                            <p className="card-text">Special Requests: {cheesecake.specialRequests}</p>
                            <p className="card-text">Quantity: {cheesecake.quantity}</p>
                            <p className="card-text">Delivery Date:{dayjs(cheesecake.deliveryDate).format("MM/DD/YYYY")} </p>
                            <p className="card-text fw-bold">Total: ${orderTotal.toFixed(2)}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order;
