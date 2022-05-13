import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "./Form.css"
import "./bootstrap.css"

function Form() {
    const [schedule, setSchedule] = useState();
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setSchedule(data)
        setSubmitted(true)
    }

    return (
        <div>
            {submitted ?
                <div className='popup-main-container'>
                    <h1>Submitted information</h1>
                    <div>The company name is {`${schedule.company_name}`}</div>

                    <div>The email is {`${schedule.email}`}</div>

                    <div>Telephone number: {`${schedule.tel_number}`}</div>

                    <div>Your oil disposal of {`${schedule.oil_quantity}`} litres will save {parseInt(schedule.oil_quantity) * 3} Kg in CO<sub>2</sub> emissions!</div>

                    <div>Your collection is scheduled for {`${schedule.date.substring(0, 10)}`} at {`${schedule.date.substring(11, 16)}`} hrs</div>
                    {schedule.additional_information === "" ? null : <div>Additional information:{`${schedule.additional_information}`}</div>}


                </div> : <div>
                    <div className='form-title-container'>
                        <h1 className='form-title'>SCHEDULE YOUR OIL COLLECTION</h1>
                    </div>
                    <form className='main-form justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Company Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Company Name" {...register("company_name", { required: true })} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Mobile number</label>
                            <div class="col-sm-10">
                                <input type="tel" class="form-control" placeholder="Mobile number" {...register("tel_number", { required: true, minLength: 6, maxLength: 12 })} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Oil quantity in litres </label>
                            <div class="col-sm-10">
                                <input class="form-control" type="number" placeholder="Oil quantity" {...register("oil_quantity", { required: true })} />
                                {/* <select class="form-control" {...register("oil_quantity", { required: true })}>
                                    <option value="50L-100L">50L-100L</option>
                                    <option value="100L-150L">100L-150L</option>
                                    <option value="150L-200L">150L-200L</option>
                                    <option value="200L-300L">200L-300L</option>
                                    <option value="+300L">+300L</option>
                                </select> */}
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Collection date</label>
                            <div class="col-sm-10">
                                <input type="datetime-local" class="form-control" placeholder="Collection date" {...register("date", { required: true })} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Additional information</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Additional information" {...register("additional_information", {})} />
                            </div>
                        </div>
                        <div className='form-button_container'>
                            <button className='btn btn-primary submit-button' type="submit">Submit</button>
                        </div>
                    </form>
                </div>}

        </div>
    );
}

export default Form;
