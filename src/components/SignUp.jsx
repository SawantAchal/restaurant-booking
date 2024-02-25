import React from 'react'

const SignUp = () => {
  return (
    <>
        <div className='mt-52 flex justify-center items-center'>
            <form>
                <h1 className='font-bold text-center'>Sign up</h1>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email ID
                    </label>
                    <div className="mt-2">
                        <input type="email" name="email" id="email" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div className="">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div className="">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last Name
                    </label>
                    <div className="mt-2">
                        <input type="text" name="last-name" id="last-name" autoComplete="given-name" className="block w-72 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="mt-2">
                        <input type="password" name="password" id="password" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                        confirm  Password
                    </label>
                    <div className="mt-2">
                        <input type="password" name="confirm-password" id="confirm-password" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
                <button type="submit" className=" mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign Up
                </button>
            </form>
        </div>
    </>
  )
}

export default SignUp



    // <div>
    //   <h1>Sign Up</h1>
    //   <form>
    //     {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> */}
    //     <div>
    //     <div className="sm:col-span-3">
    //             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
    //                 Email ID
    //             </label>
    //             <div className="mt-2">
    //                 <input type="email" name="email" id="email" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    //             </div>
    //         </div>
    //         <div className="sm:col-span-3">
    //             <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
    //                 First name
    //             </label>
    //             <div className="mt-2">
    //                 <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    //             </div>
    //         </div>
    //         <div className="sm:col-span-3">
    //             <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
    //                 Last Name
    //             </label>
    //             <div className="mt-2">
    //                 <input type="text" name="last-name" id="last-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    //             </div>
    //         </div>
    //         <div className="sm:col-span-3">
    //             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
    //                 Password
    //             </label>
    //             <div className="mt-2">
    //                 <input type="password" name="password" id="password" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    //             </div>
    //         </div>
    //         <div className="sm:col-span-3">
    //             <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
    //               confirm  Password
    //             </label>
    //             <div className="mt-2">
    //                 <input type="password" name="confirm-password" id="confirm-password" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    //             </div>
    //         </div>
    //         <div>

    //         </div>
    //         <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    //             Sign Up
    //         </button>
    //     </div>
    //     </form>
    // </div>