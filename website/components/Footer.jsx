const Footer = () => {
  return (
    <footer className='py-6 text-gray-200 bg-gray-800'>
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
  );
};

export default Footer;
