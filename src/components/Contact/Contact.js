import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        fetch(`https://frightening-labyrinth-15528.herokuapp.com/addContact`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your Message sent successfully');
                    reset();
                }
            });

    };
    return (
        <>
            <Container>
                <div className=" row mt-5">
                    <div className="col-md-6 bg-info">
                        <h2>Contact Us</h2>
                        <h3>Dhaka Office: 82/4 (Gr. Floor), New DOHS, Mirpur, Dhaka-1210</h3>
                        <h4>Phone amp WhatsApp:</h4>
                        <p>+880170000111, +880 181 1114 5555</p>
                        <p> +88 015 1717 1085. +33 6 05 69 49 85.</p>
                        <p> E-mail: info@tourmates-bd.com, tourmates-bd@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                        <div className="container add-new-contact ">
                            <form className="bg-secondary p-5" onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <input defaultValue="" {...register("name", { required: true })} placeholder="Your Name" />
                                <input defaultValue="" {...register("email", { required: true })} placeholder="Your Email" />
                                <input defaultValue="" {...register("mobile")} placeholder="Mobile no" />
                                <input defaultValue="" {...register("subject")} placeholder="Subject" />
                                <input type="textArea" {...register("message")} placeholder="Your Message" />

                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span className="text-warning">This field is required</span>}
                                <br />
                                <input className="bg-warning p-3" type="submit" />
                            </form>
                        </div>
                    </div>

                </div>
            </Container>

        </>
    );

};

export default Contact;