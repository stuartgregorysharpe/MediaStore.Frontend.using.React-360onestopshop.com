import React from "react";
import TopBar from "../../../ShareWidgets/TopBar";
import SiderBar from "../../../ShareWidgets/SiderBar";
import { File } from 'megajs'
import { useEffect } from "react";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addMegaList } from "../Actions/action";

export default function MegaNZView() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [url, setUrl] = useState('');
    const [meganame, setMeganame] = useState('');
    const [megasize, setMegasize] = useState("");
    const [filetype, setFiletype] = useState('');

    useEffect(() => {
        const uploadFiles = async () => {
            const file = File.fromURL('https://mega.nz/file/Mv0GgQBI#V7ZWUREIhnvFWBnccjnfgQGdF8qc6nMwUGsCU-zqTaM')

            await file.loadAttributes()
            console.log(file.name) // file name
            console.log(file.size) // file size in bytes

            const data = await file.downloadBuffer()
            console.log(data.toString())
        }
        uploadFiles();
    }, [])

    const importMega = async () => {
        if (url) {
            const file = File.fromURL(url);
            await file.loadAttributes();
            const fileExtensionIndex = file.name.lastIndexOf(".");
            const fileExtension = file.name.slice(fileExtensionIndex + 1);
            const justfilename = file.name.slice(0, fileExtensionIndex);
            localStorage.setItem("meganame", justfilename);
            localStorage.setItem("megasize", file.size);
            localStorage.setItem("megalink", url);
            localStorage.setItem("megatype", fileExtension);
            setFiletype(fileExtension);
            setMeganame(justfilename);
            setMegasize(file.size);
            toast.info("Imported from mega.nz. Add to server list.");
        } else {
            toast.warning("Input paste url from mega.nz")
        }
    }

    const addList = async() => {
        if(localStorage.getItem('meganame') && localStorage.getItem('megatype') && localStorage.getItem('megasize') && localStorage.getItem('megalink') ){
            const data = {
                name: localStorage.getItem("meganame"),
                type: localStorage.getItem("megatype"),
                size: localStorage.getItem("megasize"),
                link: localStorage.getItem("megalink")
            }
            dispatch(addMegaList(data, navigate));
        }
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <SiderBar />
            <div className="flex-grow overflow-auto">
                <TopBar />
                <div className="p-20">
                    <div className="">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Paste Link here from Mega.nz
                            </label>
                            <div className="mt-2 flex">
                                <input
                                    type="url"
                                    name="url"
                                    onChange={(e) => { setUrl(e.target.value) }}
                                    placeholder="URI from mega.nz"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <button
                                    type="button"
                                    onClick={importMega}
                                    className="ml-5 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Import from Mega
                                </button>
                                <button
                                    type="button"
                                    onClick={addList}
                                    className="ml-3 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Add to my server
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Recently imported file: {localStorage.getItem("meganame")}type:{localStorage.getItem("megatype")}{localStorage.getItem("megasize")}from{localStorage.getItem('megalink')}</p>
                    </div>
                    <div className="">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                                <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                                <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}