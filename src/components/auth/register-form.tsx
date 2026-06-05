import {blueButtonClass} from "@/util/constants";
import {SignupAction} from "@/app/actions/auth";

/**
 * Register form for the login pages
 */


// TODO Possibly move this CSS elsewhere.

const formLabelClass = `block mb-2.5 font-medium text-heading text-1xl`

const formInputBoxClass = `
bg-neutral-secondary-medium border border-default-medium text-heading 
text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 
shadow-xs placeholder:text-body
`

/**
 * This is a test form with flowbite react, for now it is setup as a basic login form.
 * https://flowbite.com/docs/forms/input-field/
 */
// export function RegisterForm() {
//
//     // https://reacthustle.com/blog/nextjs-submit-form-to-api-using-formdata
//
//     return (
//         <form method="POST" action="/api/register">
//             {/*<div className="grid gap-6 mb-6 md:grid-cols-2">*/}
//             {/*<div>*/}
//             {/*    <label htmlFor="first_name" className={formLabelClass}>First name</label>*/}
//             {/*    <input type="text" id="first_name" className={formInputBoxClass} placeholder="John" required />*/}
//             {/*</div>*/}
//             {/*</div>*/}
//             <div className="mb-6">
//                 <label htmlFor="username" className={formLabelClass}>Username</label>
//                 <input type="username"
//                        name="username"
//                        id="username"
//                        className={formInputBoxClass}
//                        placeholder="username"
//                        required/>
//             </div>
//
//             <div className="mb-6">
//                 <label htmlFor="email" className={formLabelClass}>Email address</label>
//                 <input type="email"
//                        name="email"
//                        id="email"
//                        className={formInputBoxClass}
//                        placeholder="john.doe@company.com"
//                        required/>
//             </div>
//             <div className="mb-6">
//                 <label htmlFor="password"
//                        className={formLabelClass}>Password</label>
//                 <input type="password"
//                        name="password"
//                        id="password"
//                        className={formInputBoxClass}
//                        placeholder="•••••••••"
//                        required />
//             </div>
//             <div className="mb-6">
//                 <label htmlFor="confirm_password" className={formLabelClass}>Confirm password</label>
//                 <input type="password"
//                        id="confirm_password"
//                        className={formInputBoxClass}
//                        placeholder="•••••••••"
//                        required />
//             </div>
//             {/*<div className="flex items-start mb-6">*/}
//             {/*    <div className="flex items-center h-5">*/}
//             {/*        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />*/}
//             {/*    </div>*/}
//             {/*    <label htmlFor="remember" className="ms-2 text-sm font-medium text-heading">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</label>*/}
//             {/*</div>*/}
//             <button
//                 type="submit"
//                 className={blueButtonClass}>
//                 Submit
//             </button>
//         </form>
//     )
// }



// TODO Make this give an error if the name and email already exist.
export function BetterAuthRegister() {
    return (
        <>
        <h1 className="text-2xl text-center">Sign up with Better Auth</h1>
            <form action={SignupAction}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/*<div>*/}
                {/*    <label htmlFor="first_name" className={formLabelClass}>First name</label>*/}
                {/*    <input type="text" id="first_name" className={formInputBoxClass} placeholder="John" required />*/}
                {/*</div>*/}
                {/*</div>*/}
                <div className="mb-6">
                    <label htmlFor="username" className={formLabelClass}>Username</label>
                    {/*<input type="username"*/}
                    <input type="text"
                           // name="username"
                           name="name"
                           id="username"
                           className={formInputBoxClass}
                           placeholder="username"
                           required/>

                    <div className="mb-6">
                        <label htmlFor="email" className={formLabelClass}>Email address</label>
                        <input type="email"
                               name="email"
                               id="email"
                               className={formInputBoxClass}
                               placeholder="john.doe@company.com"
                               required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password"
                               className={formLabelClass}>Password</label>
                        <input type="password"
                               name="password"
                               id="password"
                               className={formInputBoxClass}
                               placeholder="•••••••••"
                               required />
                    </div>
                    {/*<div className="mb-6">*/}
                    {/*    <label htmlFor="confirm_password" className={formLabelClass}>Confirm password</label>*/}
                    {/*    <input type="password"*/}
                    {/*           id="confirm_password"*/}
                    {/*           className={formInputBoxClass}*/}
                    {/*           placeholder="•••••••••"*/}
                    {/*           required />*/}
                    {/*</div>*/}
                    
                </div>
                </div>
                             <button
                                 type="submit"
                                 className={blueButtonClass}>
                                 Submit
                             </button>
            </form>

        </>
    )
}

