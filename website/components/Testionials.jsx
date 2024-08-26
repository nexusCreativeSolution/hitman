
const Testionials = () => {
  return (
    <section id='testimonial' className='py-16 bg-gray-100'>
      <div className='container px-6 mx-auto'>
        <h3 className='mb-8 text-3xl font-bold text-center text-gray-800'>
          What Our Clients Say
        </h3>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='p-6 text-center bg-white rounded-lg shadow-lg'>
            <img
              src='https://telegra.ph/file/f70249846c5d8e7e31a07.jpg'
              alt='Client 1'
              className='w-24 h-24 mx-auto mb-4 rounded-full'
            />
            <h4 className='text-xl font-bold text-gray-800'>Samantha Boyd</h4>
            <p className='mb-4 text-gray-600'>First Client</p>
            <p className='text-gray-600'>
              The poster Nexus Creative Solution designed for me is fantastic!
              It looks great and clearly communicates my message. I’m thrilled
              with the result!
            </p>
          </div>
          <div className='p-6 text-center bg-white rounded-lg shadow-lg'>
            <img
              src='https://telegra.ph/file/fbc231c51e2c4310d18c7.jpg'
              alt='Client 2'
              className='w-24 h-24 mx-auto mb-4 rounded-full'
            />
            <h4 className='text-xl font-bold text-gray-800'>Archer Mcneish</h4>
            <p className='mb-4 text-gray-600'>Second Client</p>
            <p className='text-gray-600'>
              Nexus Creative Solution provided exceptional service in designing
              my website. The attention to detail and professionalism exceeded
              my expectations. Highly recommended!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testionials;
