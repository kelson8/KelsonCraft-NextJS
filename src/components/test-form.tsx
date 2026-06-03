"use client";

// import {useEffect, useState} from "react";

import {FormEvent, useState} from "react";

/**
 * This is a test form with flowbite react, for now it is setup as a basic login form.
 * https://flowbite.com/docs/forms/input-field/
 */
export function TestForm() {
    return (
        <form>
            {/*<div className="grid gap-6 mb-6 md:grid-cols-2">*/}
                {/*<div>*/}
                {/*    <label htmlFor="first_name" className="block mb-2.5 text-sm font-medium text-heading">First name</label>*/}
                {/*    <input type="text" id="first_name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required />*/}
                {/*</div>*/}
            {/*</div>*/}
            <div className="mb-6">
                <label htmlFor="username" className="block mb-2.5 text-sm font-medium text-heading">Username</label>
                <input type="username" id="username" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="john.doe@company.com" required />
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Email address</label>
                <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="john.doe@company.com" required />
            </div>
            {/*<div className="mb-6">*/}
            {/*    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Password</label>*/}
            {/*    <input type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />*/}
            {/*</div>*/}
            {/*<div className="mb-6">*/}
            {/*    <label htmlFor="confirm_password" className="block mb-2.5 text-sm font-medium text-heading">Confirm password</label>*/}
            {/*    <input type="password" id="confirm_password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />*/}
            {/*</div>*/}
            {/*<div className="flex items-start mb-6">*/}
            {/*    <div className="flex items-center h-5">*/}
            {/*        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />*/}
            {/*    </div>*/}
            {/*    <label htmlFor="remember" className="ms-2 text-sm font-medium text-heading">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</label>*/}
            {/*</div>*/}
            {/*<button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>*/}
        </form>
    )
}

// https://nextjs.org/docs/pages/guides/forms
// function SubmitTestForm() {
//     const [isLoading, setIsLoading] = useState<boolean>(false)
//     const [error, setError] = useState<string | null>(null)
//
//     async function onSubmit(event: FormEvent<HTMLFormElement>) {
//         event.preventDefault()
//         setIsLoading(true)
//         setError(null) // Clear previous errors when a new request starts
//
//         try {
//             const formData = new FormData(event.currentTarget)
//             const response = await fetch('/api/submit', {
//                 method: 'POST',
//                 body: formData,
//             })
//
//             if (!response.ok) {
//                 throw new Error('Failed to submit the data. Please try again.')
//             }
//
//             // Handle response if necessary
//             const data = await response.json()
//             // ...
//         } catch (error: unknown) {
//             // Capture the error message to display to the user
//             setError(error.message)
//             console.error(error)
//         } finally {
//             setIsLoading(false)
//         }
//     }
// }

// function SubmitTestForm(){
//     const [data, setData] = useState(null)
//     // const [isLoading, setLoading] = useState(true)
//     // const handleSubmit = async (event: Event) => {
//     //     event.preventDefault();
//     //     const formData = {
//     //         username: event.target.username.value,
//     //         email: event.target.email.value,
//     //     }
//     // }
//
//     // useEffect(() => {
//     //     fetch('/api/test-form-post')
//     //         .then((data) => {
//     //             setData(data)
//     //             setLoading(false)
//     //         })
//     // })
//
//     // if (isLoading) return <p>Loading...</p>
//     // if (!data) return <p>No profile data</p>
//
//     // const response = await(fetch('/api/test-form-post', {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify({ key: '' })
//     // }))
//
//     const response = await fetch('/api/test-form-post', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//
//     const result = await response.json();
//     return result;
// }