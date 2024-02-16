import { Helmet } from "react-helmet-async";
import { useFormik } from 'formik';



import { useState } from 'react';
import PublicApi from "../Hooks/PublicApi";

const Apply = () => {

    const [error, setError] = useState("")
    const public_url = PublicApi()


    const formik = useFormik({
        initialValues: {

            busineesName: "",
            transportType: "",
            route: "",
            distance: "",
            des: "",
            brta: "",



        },
        validate: values => {
            const errors = {};
            if (!values.busineesName) {
                errors.busineesName = 'Required Business Name';
            }
            if (!values.transportType) {
                errors.transportType = 'Required Transport Type';
            }
            if (!values.route) {
                errors.route = 'Required Route';
            }
            if (!values.distance) {
                errors.distance = 'Required Distance';
            }
            if (!values.des) {
                errors.des = 'Required Description';
            }
            if (!values.brta) {
                errors.brta = 'Required licence';
            }


            return errors

        },
        onSubmit: values => {
            setError("")
            public_url.post("/api/user/owner/add_vehicle")
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            })
            console.log(values);

        }
    })
    return (
        <div>
            <Helmet>
                <title>Apply</title>

            </Helmet>
            <div className=" min-h-screen  mt-44 md:mt-32 lg:mt-36 ">
                <div className=" flex-col ">
                    <div className="text-center flex items-center justify-center lg:text-left">
                        <h1 className="text-5xl text-blue-600  text-center font-bold p-8">Transport Owner Information</h1>


                    </div>
                    <div className="card w-1/2 mx-auto  shadow-2xl ">
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Transport Name</span>
                                </label>
                                <input type="text" id="busineesName" name="busineesName" placeholder="Business Name" onChange={formik.handleChange}
                                    value={formik.values.busineesName} className="input input-bordered" required />
                                {formik.touched.busineesName && formik.errors.busineesName && <p className='text-red-500'>{formik.errors.busineesName}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Transport Type</span>
                                </label>
                                <input type="text" id="transportType" name="transportType" placeholder="Transport Type" onChange={formik.handleChange}
                                    value={formik.values.transportType} className="input input-bordered" required />
                                {formik.touched.transportType && formik.errors.transportType && <p className='text-red-500'>{formik.errors.transportType}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Route</span>
                                </label>
                                <input type="text" id="route" name="route" placeholder="Route" onChange={formik.handleChange}
                                    value={formik.values.route} className="input input-bordered" required />
                                {formik.touched.route && formik.errors.route && <p className='text-red-500'>{formik.errors.route}</p>}

                            </div>
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Description</span>
                                </label>
                                <input type="text" id="des" name="des" placeholder="Description" onChange={formik.handleChange}
                                    value={formik.values.des} className="input input-bordered" required />
                                {formik.touched.des && formik.errors.des && <p className='text-red-500'>{formik.errors.des}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">BRTA Licence Number</span>
                                </label>
                                <input type="number" id="brta" name="brta" placeholder="Licence Number" onChange={formik.handleChange}
                                    value={formik.values.brta} className="input input-bordered" required />
                                {formik.touched.brta && formik.errors.brta && <p className='text-red-500'>{formik.errors.brta}</p>}

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-2xl font-semibold text-white hover:bg-blue-800 btn-primary">Submit to Admin Panel</button>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="divider divider-start"></div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;