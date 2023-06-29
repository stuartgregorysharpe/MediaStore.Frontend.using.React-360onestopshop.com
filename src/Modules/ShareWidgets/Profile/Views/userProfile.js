import React from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import IconMan from '../../../../Assets/Icons/woman.png'
import TopBar from "../../TopBar";


const UserProfileView = () => {

    return (
        <div>
            <TopBar />
            <div className="px-40">
                <form>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-bold font-semibold leading-4 text-xl text-gray-900">Profile</h2>
                            <h2 className="text-base font-bold font-semibold leading-4 text-gray-900 pt-10">Profile info</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Update your photo and personal details here.
                            </p>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Save
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border-t border-gray-900/10 pt-5 mt-5">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Name
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border-t border-gray-900/10 pt-5 mt-5">
                                <div>Email Address</div>
                                <div className="col-span-2">
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border-t border-gray-900/10 pt-5 mt-5">
                                <div>
                                    Your photo
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        This will be displayed on your Profile.
                                    </p>
                                </div>
                                <div className="col-span-2 flex">
                                    <img
                                        className="h-20 w-20 rounded-full border border-gray-500 mb-4 sm:mb-0 mr-3 mt-12"
                                        src={IconMan}
                                        alt=""
                                    />
                                    <div className="mt-2 flex w-full justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span className="text-red-500">Click to cloud</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF ( max 800 * 600 )</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border-t border-gray-900/10 pt-5 mt-5">
                                <div>Role</div>
                                <div className="col-span-2">
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="role"
                                            placeholder="Role"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border-t border-gray-900/10 pt-5 mt-5">
                                <div>Country</div>
                                <div className="col-span-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                    >
                                        <option>United Kingdom</option>
                                        <option>Ireland</option>
                                        <option>Germany</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border-t border-gray-900/10 pt-5 mt-5">
                                <div>Time Zone</div>
                                <div className="col-span-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                    >
                                        <option>UTC (Coordinated Universal Time)</option>
                                        <option>UTC Azores, Cape Verde Island</option>
                                        <option>UTC+01:00 (Cordinated Universal Time) Dublin, Edinburgh, London</option>
                                        <option>UTC+01:00 (no DST) Tangiers, Casablanca</option>
                                        <option>UTC+01:00 Algeria</option>
                                        <option>UTC+01:00 Lisbon</option>
                                        <option>UTC+02:00 Berlin, Stockholm, Rome, Bern, Brussels</option>
                                        <option>Cairo</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border-t border-gray-900/10 pt-5 mt-5">
                                <div>Bio</div>
                                <div className="col-span-2">
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}


export default UserProfileView;