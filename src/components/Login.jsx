import React from 'react'

const Login = () => {
  return (
    <>
    <div className='mt-64 flex justify-center items-center'>
        
        <form>
        <h1 className='font-bold text-center'>Sign In</h1>
            <div >
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                </label>
                <div className="mt-2">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div >
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                <div className="mt-2">
                    <input type="password" name="password" id="password" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div>
                <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="remember-me" className="font-medium text-gray-900">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="remember-me" className="font-medium text-indigo-600">
                            Forget Password ?
                        </label>
                    </div>
                </div>
                <button type="submit" className=" mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign in
                </button>
                <p>You don't have Account ? <span className='text-indigo-600 font-semibold cursor-pointer'>Sign UP</span></p>
            </div>
        </form>
    </div>
    </>

  )
}

export default Login



        {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 items-center align-middle">
        
        <form>
        <h1>Sign in to your account</h1>
        <div >

            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                </label>
                <div className="mt-2">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
            <div>
            <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                </div>
                <div className="text-sm leading-6">
                    <label htmlFor="remember-me" className="font-medium text-gray-900">
                        Remember me
                    </label>
                </div>
                <div className="text-sm leading-6">
                    <label htmlFor="remember-me" className="font-medium text-gray-900">
                        Forget PassWord ?
                    </label>
                </div>
            </div>
            </div>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
            </button>
        </div>
        </form>
    </div> */}
