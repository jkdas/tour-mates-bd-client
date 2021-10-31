import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddNewPackage.css";

const AddNewPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        fetch(`https://frightening-labyrinth-15528.herokuapp.com/addPackage`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package added successfully');
                    reset();
                }
            });

    };


    return (
        <>
            <div>
                <h2>Add new package here</h2>
                <div className="container add-new-package ">
                    <form className="bg-secondary p-5" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input defaultValue="" {...register("packageName", { required: true })} placeholder="Package Name" />
                        <input defaultValue="" {...register("duration", { required: true })} placeholder="Duration" />
                        <input defaultValue="" {...register("timeToGo")} placeholder="Best time to Visit" />
                        <input defaultValue="" {...register("location")} placeholder="Location" />
                        <input type="number" {...register("price", { required: true })} placeholder="price" />
                        <input defaultValue="" {...register("imgUrl", { required: true })} placeholder="img url" />
                        <input defaultValue="" {...register("detailImgUrl")} placeholder="Optional img url" />
                        <input {...register("description")} placeholder="Description" />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span className="text-warning">This field is required</span>}
                        <br />
                        <input className="bg-warning w-50 mx-auto p-3" type="submit" />
                    </form>
                </div>

            </div>
        </>
    );
};

export default AddNewPackage;