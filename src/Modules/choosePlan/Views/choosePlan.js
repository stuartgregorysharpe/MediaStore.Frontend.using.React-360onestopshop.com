import React from "react"
import { CheckIcon } from '@heroicons/react/20/solid'
import TopBar from "../../ShareWidgets/TopBar"

const ChoosePlanView = () => {
    return (
        <div>
            <TopBar />
            <div className="bg-white py-24 sm:py-5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl">Choose Your Plan</h2>
                        <p className="mt-6 text-lg leading-8 font-bold text-gray-400">You need to choose your plan before preceeding further</p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">

                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-white sm:px-5 py-10 text-center ring-1 ring-inset ring-gray-200 shadow-md lg:flex lg:flex-col lg:justify-center lg:py-10">
                                <div className="mx-auto max-w-xs px-0 flex flex-col">
                                    <div className="flex justify-center items-center lg:w-full">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="40" height="40" rx="20" fill="#FFEAE9" />
                                            <path d="M23.8333 14.6667L15.5 24.6667H23L22.1667 31.3333L30.5 21.3333H23L23.8333 14.6667Z" stroke="#FF2413" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FFF6F6" strokeWidth="6" />
                                        </svg>
                                    </div>
                                    <p className="text-base font-semibold text-red-500 mt-3 text-lg">MP3</p>
                                    <p className="mt-3 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">£50/mth</span>
                                    </p>
                                    <p className="text-base font-semibold text-gray-600 pt-5">Billed monthly.</p>

                                    <div className="flex justify-start pt-10 pl-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Access to all basic features</p>
                                    </div>

                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Basic reporting and analytics</p>
                                    </div>
                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Up to 10 individual users</p>
                                    </div>
                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            20GB individual data each user</p>
                                    </div>
                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Basic music and song support</p>
                                    </div>
                                    <button
                                        className="mt-10 block w-full rounded-md bg-red-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-white sm:px-5 py-10 text-center ring-1 ring-inset ring-gray-200 shadow-md lg:flex lg:flex-col lg:justify-center lg:py-10">
                                <div className="mx-auto max-w-xs px-0 flex flex-col">
                                    <div className="flex justify-center items-center lg:w-full">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="40" height="40" rx="20" fill="#FFEAE9" />
                                            <path d="M14.6667 25.0833L23.0001 29.25L31.3334 25.0833M23.0001 16.75L14.6667 20.9167L23.0001 25.0833L31.3334 20.9167L23.0001 16.75Z" stroke="#FF2413" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FFF6F6" strokeWidth="6" />
                                        </svg>
                                    </div>
                                    <p className="text-base font-semibold text-red-500 mt-3 text-lg">Videos</p>
                                    <p className="mt-3 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">£50/mth</span>
                                    </p>
                                    <p className="text-base font-semibold text-gray-600 pt-5">Billed monthly.</p>

                                    <div className="flex justify-start pt-10 pl-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            200+ integrations</p>
                                    </div>

                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Advanced reporting and analytics</p>
                                    </div>
                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Up to 20 individual users</p>
                                    </div>
                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            40GB individual data each user</p>
                                    </div>
                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Priority music playlist support</p>
                                    </div>
                                    <button
                                        className="mt-10 block w-full rounded-md bg-red-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-white sm:px-5 py-10 text-center ring-1 ring-inset ring-gray-200 shadow-md lg:flex lg:flex-col lg:justify-center lg:py-10">
                                <div className="mx-auto max-w-xs px-0 flex flex-col">
                                    <div className="flex justify-center items-center lg:w-full">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="40" height="40" rx="20" fill="#FFEAE9" />
                                            <g clipPath="url(#clip0_171_34259)">
                                                <path d="M14.6667 27.1667L23.0001 31.3333L31.3334 27.1667M14.6667 23L23.0001 27.1667L31.3334 23M23.0001 14.6667L14.6667 18.8333L23.0001 23L31.3334 18.8333L23.0001 14.6667Z" stroke="#FF2413" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FFF6F6" strokeWidth="6" />
                                            <defs>
                                                <clipPath id="clip0_171_34259">
                                                    <rect width="20" height="20" fill="white" transform="translate(13 13)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className="text-base font-semibold text-red-500 mt-3 text-lg">MP3 & Videos</p>
                                    <p className="mt-3 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">£90/mth</span>
                                    </p>
                                    <p className="text-base font-semibold text-gray-600 pt-5">Billed monthly.</p>

                                    <div className="flex justify-start pt-10 pl-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Advanced custom fields</p>
                                    </div>

                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Audit log and data history</p>
                                    </div>
                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Unlimited individual users</p>
                                    </div>
                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Unlimited individual data</p>
                                    </div>
                                    <div className="flex justify-start pt-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#FFEAE9" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z" fill="#FF2413" />
                                        </svg>
                                        <p className="text-base font-semibold text-gray-600">
                                            Personalised+Priority service</p>
                                    </div>
                                    <button
                                        className="mt-10 block w-full rounded-md bg-red-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoosePlanView
