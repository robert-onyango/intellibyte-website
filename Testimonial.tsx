import React from 'react';

type TestimonialProps = {
  image: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
};

const Testimonial: React.FC<TestimonialProps> = ({
  image,
  name,
  position,
  company,
  quote,
  rating,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="flex items-center mb-6">
        <div 
          className="w-14 h-14 rounded-full bg-cover bg-center mr-4" 
          style={{ backgroundImage: `url(${image})` }}
          aria-label={name}
        />
        <div>
          <div className="font-bold text-[#0F2A5C]">{name}</div>
          <div className="text-sm">{position}, {company}</div>
        </div>
      </div>
      <div className="mb-4 text-[#FF7B00] flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ${i < rating ? 'fill-current' : 'fill-gray-300'}`} 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="font-serif italic text-[#4A4A4A]">
        "{quote}"
      </p>
    </div>
  );
};

export default Testimonial;
