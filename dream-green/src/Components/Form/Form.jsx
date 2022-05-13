import React from 'react';
import { useForm } from 'react-hook-form';
import "./Form.css"
import "./bootstrap.css"

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <div className='form-title-container'>
                <h1 className='form-title'>SCHEDULE YOUR OIL COLLECTION</h1>
            </div>
            <form className='main-form justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Company Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Company Name" {...register("Company Name", { required: true })} />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Mobile number</label>
                    <div class="col-sm-10">
                        <input type="tel" class="form-control" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Oil quantity</label>
                    <div class="col-sm-10">
                        <select class="form-control" {...register("Oil quantity", { required: true })}>
                            <option value="50L-100L">50L-100L</option>
                            <option value="100L-150L">100L-150L</option>
                            <option value="150L-200L">150L-200L</option>
                            <option value="200L-300L">200L-300L</option>
                            <option value="+300L">+300L</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Collection date</label>
                    <div class="col-sm-10">
                        <input type="datetime-local" class="form-control" placeholder="Collection date" {...register("Collection date", { required: true })} />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Additional info</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" placeholder="Additional comments" {...register("Additional comments", {})} />
                    </div>
                </div>
                <div className='form-button_container'>
                    <button className='btn btn-primary submit-button' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
