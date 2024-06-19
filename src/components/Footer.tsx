import Link from 'next/link';
export default function Footer() {
  return (
    <div className='footer  bg-black text-white py-4 px-6 md:px-12'>
      <div className='lg:px-16 md:px-[40px] px-[20px]'>
        <div className='flex justify-between lg:flex-row flex-col'>
          <div className='logo'>
            <h1 className='lg:text-2xl md:text-[20px] text-[18px]'><b><Link href="#">Fuvay Dev. Tech.</Link></b></h1>
          </div>
          <div className='flex md:flex-row flex-col md:ml-auto'>
            <div className='address md:mr-8'>
              <h1 className='lg:text-xl md:text-[18px] text-[16px]  font-bold'>Address</h1>
              <ul className='lg:text-x[20px] md:text-[17px] sm:text-[15px] text-[12px]'>
                <li>TDS Tower, E-193, 5th Floor,</li>
                <li>Phase 8B, Office No. 502</li>
                <li>Industrial Area, Sahibjada Ajit Singh Nagar,</li>
                <li>160055</li>
              </ul>
            </div>
            <div className='contact'>
              <h1 className='lg:text-xl md:text-[18px] text-[16px]  font-bold'>Contact</h1>
              <ul className='lg:text-x[20px] md:text-[17px] sm:text-[15px] text-[12px]'>
                <li>Phone: +91 9600995800</li>
                <li>Email: info@fuvaytechnologies.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
