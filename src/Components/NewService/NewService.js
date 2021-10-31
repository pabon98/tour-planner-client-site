import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './NewService.css'

const NewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://fast-brushlands-79885.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-tour">
        <h2>Please Add a Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="price" />
            <input {...register("image")} placeholder="image url" />
            <input className='btn btn-dark' type="submit" />
        </form>
    </div>
);
};

export default NewService;