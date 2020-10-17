import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function TestimonialsCarousel() {


  return (
    <section className="relative ">

      {/* Social icons illustrations */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Trusted by</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-1 md:grid-cols-1">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img src={require('../images/ucsf-logo.png')} width="83" height="30" />
              <img src={require('../images/vanderbilt-logo.png')} width="150" height="30" style={{marginLeft: "3%"}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;