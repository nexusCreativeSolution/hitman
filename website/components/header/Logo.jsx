import Link from 'next/link';

const Logo = () => {
  return (
    <div className='flex items-center'>
      <Link href='/' className='text-2xl font-bold text-gray-800'>
        Nexus Creative Solutions
      </Link>
    </div>
  );
};

export default Logo;
