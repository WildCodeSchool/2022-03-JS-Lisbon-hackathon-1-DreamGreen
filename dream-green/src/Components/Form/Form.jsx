import React from 'react';
import { useForm } from 'react-hook-form';
import "./Form.css"

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Company Name" {...register("Company Name", { required: true })} />
            <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
            <select {...register("Oil quantity", { required: true })}>
                <option value="10L-20L">10L-20L</option>
                <option value="20L-30L">20L-30L</option>
                <option value="30L-40L">30L-40L</option>
                <option value="40L-50L">40L-50L</option>
                <option value="+50L">+50L</option>
            </select>
            <input type="datetime-local" placeholder="Collection date" {...register("Collection date", { required: true })} />
            <input type="text" placeholder="Additional comments" {...register("Additional comments", {})} />

            <input type="submit" />
        </form>
    );
}

export default Form;