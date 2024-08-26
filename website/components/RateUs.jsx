const RateUs = () => {
  return (
    <section id='review-section' className='py-16 bg-gray-100'>
      <div className='container px-6 mx-auto'>
        <h3 className='mb-8 text-3xl font-bold text-center text-gray-800'>
          Share Your Experience
        </h3>

        <div className='max-w-2xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow-lg'>
          {/* Interactive Rating */}
          <div className='text-center'>
            <h4 className='mb-2 text-lg font-semibold text-gray-800'>
              Rate Us
            </h4>
            <div className='flex justify-center space-x-2 text-yellow-400'>
              {[...Array(5)].map((_, index) => (
                <span key={index} className='text-3xl cursor-pointer'>
                  &#9733;
                </span> // Star rating
              ))}
            </div>
          </div>{' '}
          {/* Interactive Text Area */}
          <div className='text-center'>
            <h4 className='mb-2 text-lg font-semibold text-gray-800'>
              Leave a Review
            </h4>
            <div
              className='p-4 text-gray-600 bg-gray-100 rounded-lg cursor-text'
              contentEditable='true'
              placeholder='Click to start typing your review...'
              style={{ minHeight: '100px' }}
            ></div>
          </div>
          {/* Submit Button */}
          <div className='text-center'>
            <button className='px-6 py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700'>
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateUs;
