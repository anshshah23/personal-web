import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrbzzjzq");
  
  if (state.succeeded) {
    return(
      <div className='flex justify-center text-4xl text-white font-bold self-center h-full pt-72'>
         <p className=" text-white">Thanks for reaching out to me!
          I'll get back to you soon </p>;
      </div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-transparent">
      <label htmlFor="email" className="block text-white font-bold mb-2">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500"
      />
      <label htmlFor="message" className="block text-white font-bold mb-2 mt-4">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
        rows="4"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-500"
      />
      <button type="submit" disabled={state.submitting} className="w-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded mt-4 focus:outline-none">
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default ContactForm;
