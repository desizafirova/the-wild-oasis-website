import Image from 'next/image';
import { signInAction } from '../_lib/actions';

function SignInButton() {
  return (
    // wrapping the button in a form. Once the button will be clicked the form will be submitted.
    // creating actions.js file into _lib folder
    // passing action prop, where we can pass a special function called a server action
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
