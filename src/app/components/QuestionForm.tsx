export default function QuestionForm() {
    return (
        <>
            <div className="flex items-center justify-center m-2">
                <div className="relative w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-start justify-center p-4 rounded-t">
                            <p className="text-sm font-semibold text-gray-400">
                                Economics CA-1 exam - 20 marks
                            </p>
                        </div>
                        <div className="p-6 space-y-6">

                            <div className="border border-white p-4 rounded-md">

                                <div
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    1. Full Name <span className="text-red-500">*</span>
                                    <p className="text-xs text-gray-400"> <i>Add description (Optional)</i> </p>
                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <input
                                            type="text"
                                            className="shadow-sm border-b border-gray-300 text-gray-900 text-sm focus:border-b focus:border-gray-300 block w-full p-2.5"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <input
                                            type="text"
                                            className="shadow-sm border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>

                                </div>

                            </div>


                            <div className="border-2 border-blue-300 p-4 rounded-md">

                                <div className="flex justify-between">
                                    <div>

                                    </div>
                                    <div>
                                        <svg fill="#000000" className="w-4 h-4" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Glyph" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z" id="XMLID_287_" /><path d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z" id="XMLID_289_" /><path d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z" id="XMLID_291_" /></svg>
                                    </div>

                                    <div className="flex">
                                        <svg className="w-4 h-4 m-1" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                                            <path d="M13 30L25 18L37 30" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg className="w-4 h-4 m-1" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                                            <path d="M37 18L25 30L13 18" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 m-1" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xmlSpace="preserve">
                                            <g>
                                                <path d="M45.5,10H33V6c0-2.2-1.8-4-4-4h-6c-2.2,0-4,1.8-4,4v4H6.5C5.7,10,5,10.7,5,11.5v3C5,15.3,5.7,16,6.5,16h39
		c0.8,0,1.5-0.7,1.5-1.5v-3C47,10.7,46.3,10,45.5,10z M23,7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v3h-6V7z"/>
                                                <path d="M41.5,20h-31C9.7,20,9,20.7,9,21.5V45c0,2.8,2.2,5,5,5h24c2.8,0,5-2.2,5-5V21.5C43,20.7,42.3,20,41.5,20z
		 M23,42c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z M33,42c0,0.6-0.4,1-1,1h-2
		c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z"/>
                                            </g>
                                        </svg>

                                        <svg fill="#000000" className="w-4 h-4 m-1" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M856 40H142q-42 0-72 30t-30 72v714q0 42 30 72t72 30h714q42 0 72-30t30-72V142q0-42-30-72t-72-30zM754 550H550v204H448V550H244V448h204V244h102v204h204v102z" /></svg>

                                        <svg className="w-4 h-4 m-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M9 0H7L6.44943 2.20228C5.9349 2.33954 5.44758 2.54347 4.9973 2.80426L3.05026 1.63604L1.63605 3.05025L2.80427 4.99728C2.54348 5.44757 2.33954 5.93489 2.20228 6.44943L0 7V9L2.20228 9.55057C2.33954 10.0651 2.54347 10.5524 2.80427 11.0027L1.63605 12.9497L3.05026 14.364L4.99729 13.1957C5.44757 13.4565 5.93489 13.6605 6.44943 13.7977L7 16H9L9.55057 13.7977C10.0651 13.6605 10.5524 13.4565 11.0027 13.1957L12.9498 14.364L14.364 12.9497L13.1957 11.0027C13.4565 10.5524 13.6605 10.0651 13.7977 9.55057L16 9V7L13.7977 6.44943C13.6605 5.9349 13.4565 5.44758 13.1957 4.9973L14.364 3.05025L12.9498 1.63603L11.0027 2.80426C10.5524 2.54347 10.0651 2.33954 9.55057 2.20228L9 0ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="#030708" fill-rule="evenodd" /></svg>

                                    </div>

                                </div>

                                <div
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    2. Which country has the highest population in the world?<span className="text-red-500">*</span>
                                    <p className="text-xs text-gray-400"> <i>Add description (Optional)</i> </p>
                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" /> India</span>
                                            <span className="text-gray-500">&#10006;</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" /> China</span>
                                            <span className="text-gray-500">&#10006;</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" /> Europe</span>
                                            <span className="text-gray-500">&#10006;</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" /> <i className="text-gray-400">Option 4</i> </span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="border border-white p-4 rounded-md">
                                <div
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    3. Any 3 reasons for global warming<span className="text-red-500">*</span>
                                    <p className="text-xs text-gray-400"> <i>Atleast 3 points expected</i> </p>
                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-6">
                                        <input
                                            type="text"
                                            className="shadow-sm  border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                            placeholder="type here"
                                            required
                                        />
                                    </div>

                                </div>

                            </div>


                            <div className="border border-white p-4 rounded-md">

                                <div
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    4. Which countries have have nuclear power?<span className="text-red-500">*</span>
                                    <p className="text-xs text-gray-400"> <i>Add description (Optional)</i> </p>
                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                                                <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> Romania</span>
                                            <span className="text-gray-500">&#10006;</span>
                                        </div>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                                                <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> Switzerland</span>
                                            <span className="text-gray-500">&#10006;</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                                                <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> Antartica</span>
                                            <span className="text-gray-500">&#10006;</span>
                                        </div>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                                                <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> China</span>
                                            <span className="text-gray-500">&#10006;</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                                                <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> South Africa</span>
                                            <span className="text-gray-500">&#10006;</span>
                                        </div>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <div className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 flex justify-between m-1">
                                            <span> <input type="radio" id="squareRadio" name="radioGroup" className="hidden" />
                                                <label htmlFor="squareRadio" className="cursor-pointer inline-block w-3 h-3 border border-gray-400 "></label> <i className="text-gray-500">Option 6</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
