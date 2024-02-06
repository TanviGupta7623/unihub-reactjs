
const Footer = () => {
    return (
        <footer className='bg-gray-200 py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <p className='text-gray-600'>Contact us: info@example.com</p>
          <div className='flex gap-4'>
            <a href='https://www.instagram.com/example' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-instagram text-2xl text-gray-600 hover:text-gray-800'></i>
            </a>
            <a href='https://twitter.com/example' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter text-2xl text-gray-600 hover:text-gray-800'></i>
            </a>
          </div>
        </div>
      </footer>
    );
    };
export default Footer;