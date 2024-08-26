
const About = () => {
  return (
      <section id='showcase' className='py-16 bg-gray-100'>
        <div className='container flex flex-col items-center justify-between px-6 mx-auto md:flex-row'>
          <div className='text-center md:w-1/2 md:text-left'>
            <h3 className='mb-4 text-4xl font-bold text-gray-800'>
              Professional Business Bots, Websites, and More
            </h3>
            <p className='mb-6 text-lg text-gray-600'>
              At Nexus Creative Solution, we specialize in creating advanced
              business bots, engaging websites, and innovative solutions
              tailored to your business needs.
            </p>
            <a
              href='#contact'
              className='px-6 py-3 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700'
            >
              Get Started
            </a>
          </div>
          <div className='mt-8 text-center md:w-1/2 md:mt-0'>
            <img
              src='https://candrakriswinarto.github.io/renderonline/img/showcase-images.svg'
              alt='Nexus Creative Solution Showcase'
              className='w-full h-auto'
            />
          </div>
        </div>
      </section>
  )
}

export default About