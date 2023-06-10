import React, { useContext } from 'react';
import useAuth from '../../../hooks/useAuth';
import { AuthContext } from '../../../Providers/AuthProvider';

const AddAClass = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="bg-pink-200 text-white p-24 m-10 rounded-lg">
                <h2 className="text-center text-3xl font-extrabold py-5">Add a Class</h2>
                <form >
                 
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-bold">Class Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Class Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-bold">Class Image</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="classImg" placeholder="Class Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-black font-bold">Instructor Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="instructorName" placeholder="Instructor Name" defaultValue={user.displayName} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-bold">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="instructorEmail" placeholder="Instructor Email" defaultValue={user.email} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                
            
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-black font-bold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-black font-bold">Available Seats</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="availableSeats" placeholder="Available Seats" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Class" className="btn btn-block" />

                </form>
            </div>
        </div>
    );
};

export default AddAClass;