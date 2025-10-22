import React, { useState, useEffect } from 'react';
import avatar1 from '../assets/images/avatar1.png';
import avatar2 from '../assets/images/avatar2.png';
import avatar3 from '../assets/images/avatar3.png';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const data = [
      { id: 1, text: "StudySync revolutionized my classroom!", name: "Sarah Johnson", role: "8th Grade English Teacher", avatar: avatar1 },
      { id: 2, text: "StudySync transformed our family's learning journey.", name: "Mark Davis", role: "Parent", avatar: avatar2 },
      { id: 3, text: "StudySync, a true game-changer!", name: "Dr. James Carter", role: "School Administrator", avatar: avatar3 },
    ];
    setTestimonials(data);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What Others Say About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;