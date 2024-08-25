export default function Home() {
  return (
    <main className='bg-gray-50 min-h-screen'>
      {/* Header */}
      <header className='bg-white shadow-md'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6'>
          <div className='text-2xl font-bold text-indigo-600'>
            Nexus<span className='text-gray-800'>Creative Solution</span>
          </div>
          <nav className='hidden md:flex space-x-6'>
            <a href='#showcase' className='text-gray-800 hover:text-indigo-600'>
              Home
            </a>
            <a href='#showcase' className='text-gray-800 hover:text-indigo-600'>
              Services
            </a>
            <a href='#projects' className='text-gray-800 hover:text-indigo-600'>
              Projects
            </a>
            <a
              href='#testimonial'
              className='text-gray-800 hover:text-indigo-600'
            >
              Testimonials
            </a>
            <a href='#contact' className='text-gray-800 hover:text-indigo-600'>
              Contact
            </a>
            <a
              href='#review-section'
              className='text-gray-800 hover:text-indigo-600'
            >
              Reviews
            </a>
          </nav>
          {/* Mobile Menu */}
          <div className='md:hidden flex items-center'>
            <button className='text-gray-800 focus:outline-none'>
              <i className='fas fa-bars'></i>
            </button>
          </div>
        </div>
      </header>

      {/* Showcase Section */}
      <section id='showcase' className='bg-gray-100 py-16'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6'>
          <div className='md:w-1/2 text-center md:text-left'>
            <h3 className='text-4xl font-bold text-gray-800 mb-4'>
              Professional Business Bots, Websites, and More
            </h3>
            <p className='text-lg text-gray-600 mb-6'>
              At Nexus Creative Solution, we specialize in creating advanced
              business bots, engaging websites, and innovative solutions
              tailored to your business needs.
            </p>
            <a
              href='#contact'
              className='bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition'
            >
              Get Started
            </a>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0 text-center'>
            <img
              src='https://candrakriswinarto.github.io/renderonline/img/showcase-images.svg'
              alt='Nexus Creative Solution Showcase'
              className='w-full h-auto'
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id='featured' className='py-16 bg-white'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6'>
          <div className='md:w-1/2 text-center md:text-left'>
            <h3 className='text-3xl font-bold text-gray-800 mb-4'>
              Why Choose Nexus Creative Solution?
            </h3>
            <p className='text-lg text-gray-600 mb-6'>
              We offer a unique blend of creativity and technical expertise to
              bring your vision to life, whether through customized bots or
              dynamic web solutions.
            </p>
            <a
              href='#contact'
              className='bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition'
            >
              Learn More
            </a>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0 text-center'>
            <img
              src='https://candrakriswinarto.github.io/renderonline/img/logo-mobile-img.svg'
              alt='Nexus Logo'
              className='w-full h-auto'
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id='testimonial' className='bg-gray-100 py-16'>
        <div className='container mx-auto px-6'>
          <h3 className='text-3xl font-bold text-gray-800 text-center mb-8'>
            What Our Clients Say
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Testimonial 1 */}
            <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
              <img
                src='https://telegra.ph/file/f70249846c5d8e7e31a07.jpg'
                alt='Client 1'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold text-gray-800'>Samantha Boyd</h4>
              <p className='text-gray-600 mb-4'>First Client</p>
              <p className='text-gray-600'>
                The poster Nexus Creative Solution designed for me is fantastic!
                It looks great and clearly communicates my message. I’m thrilled
                with the result!
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
              <img
                src='https://telegra.ph/file/fbc231c51e2c4310d18c7.jpg'
                alt='Client 2'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold text-gray-800'>
                Archer Mcneish
              </h4>
              <p className='text-gray-600 mb-4'>Second Client</p>
              <p className='text-gray-600'>
                Nexus Creative Solution provided exceptional service in
                designing my website. The attention to detail and
                professionalism exceeded my expectations. Highly recommended!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id='faq' className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <h3 className='text-3xl font-bold text-gray-800 text-center mb-8'>
            Frequently Asked Questions
          </h3>
          <div className='space-y-6'>
            {/* FAQ 1 */}
            <div className='border border-gray-300 rounded-lg p-4'>
              <h4 className='text-lg font-semibold text-gray-800'>
                What services do you offer?
              </h4>
              <p className='text-gray-600 mt-2'>
                We offer a range of services including website development,
                flyer design, and Telegram/WhatsApp bot creation. Our team
                specializes in creating custom solutions tailored to your
                business needs.
              </p>
            </div>
            {/* FAQ 2 */}
            <div className='border border-gray-300 rounded-lg p-4'>
              <h4 className='text-lg font-semibold text-gray-800'>
                How can I get started with your services?
              </h4>
              <p className='text-gray-600 mt-2'>
                You can get started by contacting us through our{' '}
                <a href='#contact' className='text-indigo-600'>
                  contact form
                </a>{' '}
                or by emailing us at{' '}
                <a
                  href='mailto:nexuscreativesolution@gmail.com'
                  className='text-indigo-600'
                >
                  nexuscreativesolution@gmail.com
                </a>
                . We will guide you through the process and discuss your
                requirements.
              </p>
            </div>
            {/* FAQ 3 */}
            <div className='border border-gray-300 rounded-lg p-4'>
              <h4 className='text-lg font-semibold text-gray-800'>
                What is the typical turnaround time for a project?
              </h4>
              <p className='text-gray-600 mt-2'>
                The turnaround time varies depending on the complexity of the
                project. On average, website development takes 2-4 weeks, while
                flyer design and bot creation can take 1-2 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-gray-200 py-6'>
        <div className='container mx-auto text-center'>
          <p className='mb-4'>
            &copy; 2024 Nexus Creative Solution. All rights reserved.
          </p>
          <div className='flex justify-center space-x-4'>
            <a
              href='/error.html'
              target='_blank'
              className='text-gray-200 hover:text-white'
            >
              <i className='fab fa-whatsapp'></i>
            </a>
            <a
              href='https://t.me/TalkWizardBot'
              target='_blank'
              className='text-gray-200 hover:text-white'
            >
              <i className='fab fa-telegram'></i>
            </a>
            <a
              href='https://www.instagram.com/nexus_creative_solution?igsh=dnZ0MTBwNXU5dm8x&utm_source=qr'
              target='_blank'
              className='text-gray-200 hover:text-white'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
