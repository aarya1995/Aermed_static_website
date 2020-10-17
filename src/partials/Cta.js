import React from 'react';

function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{marginTop: "4%"}}>
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out" style={{backgroundColor: "#4b66ea"}}>

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Ready to get started?</h3>
                <p className="text-white text-lg opacity-75">We'd love to have a conversation to see how Aermed can benefit your practice.</p>
              </div>

              {/* CTA button */}
              <div>
                <a className="btn bg-gradient-to-r from-blue-100 to-white" href="#0" style={{color: "#4b66ea"}}>Get in touch</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
