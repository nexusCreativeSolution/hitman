
const Contact = () => {
  return (
    <section id='contact' className='py-16 bg-white'>
      <div className='container px-6 mx-auto'>
        <h3 className='mb-8 text-3xl font-bold text-center text-gray-800'>
          Get In Touch
        </h3>
        <div className='max-w-2xl p-8 mx-auto space-y-6 bg-gray-100 rounded-lg shadow-lg'>
          {/* Name Input */}
          <div>
            <label className='block mb-2 text-lg font-semibold text-gray-800'>
              Name
            </label>
            <div className='p-4 text-gray-600 bg-white border border-gray-300 rounded-lg cursor-text focus-within:border-indigo-600'>
              <input
                type='text'
                placeholder='Enter your name'
                className='w-full focus:outline-none'
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className='block mb-2 text-lg font-semibold text-gray-800'>
              Email
            </label>
            <div className='p-4 text-gray-600 bg-white border border-gray-300 rounded-lg cursor-text focus-within:border-indigo-600'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full focus:outline-none'
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label className='block mb-2 text-lg font-semibold text-gray-800'>
              Message
            </label>
            <div className='p-4 text-gray-600 bg-white border border-gray-300 rounded-lg cursor-text focus-within:border-indigo-600'>
              <textarea
                placeholder='Write your message here...'
                className='w-full h-32 resize-none focus:outline-none'
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className='text-center'>
            <button className='px-6 py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700'>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact