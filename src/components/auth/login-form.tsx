import {blueButtonClass} from "@/util/constants";
import {SignInAction} from "@/app/actions/auth";

// This is a test form with flowbite react, for now it is setup as a basic login form.
//     https://flowbite.com/docs/forms/input-field/

// TODO Possibly move this CSS elsewhere.

const formLabelClass = `block mb-2.5 text-sm font-medium text-heading`

const formInputBoxClass = `
bg-neutral-secondary-medium border border-default-medium text-heading 
text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 
shadow-xs placeholder:text-body
`

// TODO Make helper methods for these forms.
// For now I'll just leave this like this.

/**
 * Login form for the login pages.
 */
export function LoginForm() {

    // https://reacthustle.com/blog/nextjs-submit-form-to-api-using-formdata

    return (
        // <form method="POST" action="/api/login">
        <form action={SignInAction}>
            {/*<div className="grid gap-6 mb-6 md:grid-cols-2">*/}
            {/*<div>*/}
            {/*    <label htmlFor="first_name" className="block mb-2.5 text-sm font-medium text-heading">First name</label>*/}
            {/*    <input type="text" id="first_name" className={formInputBoxClass} placeholder="John" required />*/}
            {/*</div>*/}
            {/*</div>*/}
            <div className="mb-6">
                <label htmlFor="username"
                       className={formLabelClass}>Username</label>
                {/*<input type="username"*/}
                <input type="text"
                       // name="username"
                       name="name"
                       id="username"
                       className={formInputBoxClass}
                       placeholder="username"
                       required/>
            </div>

            <div className="mb-6">
                <label htmlFor="email"
                       className={formLabelClass}>Email Address</label>
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
            {/*</div>*/}

            {/* TODO Add a remember me button. */}
            {/*<div className="flex items-start mb-6">*/}
            {/*    <div className="flex items-center h-5">*/}
            {/*        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />*/}
            {/*    </div>*/}
            {/*    <label htmlFor="remember" className="ms-2 text-sm font-medium text-heading">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</label>*/}
            {/*</div>*/}
            <button
                type="submit"
                className={blueButtonClass}>
                Submit
            </button>
        </form>
    )
}