import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../components/styles/ContactForm.css';
function ContactForm() {
  const [state, handleSubmit] = useForm("xrbzzjzq");

  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-center h-3/4">
        <div className="font-medium text-sm md:text-lg leading-6 md:leading-8 tracking-wide justify-center">
          <h1 className="text-2xl md:text-4xl font-semibold pb-10 text-center">
          Thanks for <b className="text-yellow-400">reaching out to Me</b>!</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center bg-transparent overflow-hidden text-white'>
          <div className='text-center'>
            <p className='text-xl'>I'll get back to you soon.</p> 
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="font-medium text-sm md:text-lg leading-6 md:leading-8 tracking-wide justify-center">
        <h1 className="text-2xl md:text-4xl font-semibold pb-10 text-center">
          Get in Touch with <b className="text-yellow-400">Me</b>!</h1>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg">
        <label htmlFor="email" className="block text-white font-bold mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md text-gray-300 bg-gray-800 bg-opacity-50 focus:outline-none focus:border-blue-500"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 duration-1000"
        />
        <label htmlFor="message" className="block text-white font-bold mb-2 mt-4">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 border rounded-md text-gray-300 bg-gray-800 bg-opacity-50 focus:outline-none focus:border-blue-500"
          rows="4"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500"
        />
        <button type="submit" disabled={state.submitting} className="contact-button w-full items-center justify-center ">
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
