const Featured = () => {
  return (
    <section id='featured' className='py-16 bg-white'>
      <div className='container flex flex-col items-center justify-between px-6 mx-auto md:flex-row'>
        <div className='text-center md:w-1/2 md:text-left'>
          <h3 className='mb-4 text-3xl font-bold text-gray-800'>
            Why Choose Nexus Creative Solution?
          </h3>
          <p className='mb-6 text-lg text-gray-600'>
            We offer a unique blend of creativity and technical expertise to
            bring your vision to life, whether through customized bots or
            dynamic web solutions.
          </p>
          <a
            href='#contact'
            className='px-6 py-3 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700'
          >
            Learn More
          </a>
        </div>
        <div className='mt-8 text-center md:w-1/2 md:mt-0'>
          <img
            src='https://candrakriswinarto.github.io/renderonline/img/logo-mobile-img.svg'
            alt='Nexus Logo'
            className='w-full h-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
