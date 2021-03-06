import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';
import {
  FaBolt,
  FaClipboardList,
  FaLock
} from 'react-icons/fa';

function FeaturesHome() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center" style={{paddingBottom: "2rem"}}>
            <h1 className="h2 mb-4">PROs: An Emerging Source of Insight</h1>
            <p className="text-xl text-gray-600">
              Even with limited existing data, meaningful clinical results have been found through the use of patient-reported outcome (PRO) surveys
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-5xl pt-8 md:pt-12" style={{marginBottom: "10%"}}>


            {/* 1st item */}
            <div className="text-center">
              <img src={require('../images/cancer.png')} width="230" height="180" style={{margin: "auto"}}/>
              <div className="h3 mb-1" style={{marginTop: "15px"}}>Oncology</div>
              <div className="text-gray-600">Online administration of PRO surveys to lung cancer patients in France helped detect relapse in advance, driving a 26% increase in survival rates
              </div>
            </div>

            {/* 2nd item */}
            <div className="text-center">
              <img src={require('../images/dermatology.png')} width="230" height="180" style={{margin: "auto"}} />
              <div className="h3 mb-1" style={{marginTop: "15px"}}>Dermatology</div>
              <div className="text-gray-600">Using Skindex PROs, USCF researchers found patients treated with excision or Mohs surgery had better outcomes than those treated with ED&C
              </div>
            </div>

            {/* 3rd item */}
            <div className="text-center">
              <img src={require('../images/psychiatry.png')} width="230" height="180" style={{margin: "auto"}} />
              <div className="h3 mb-1" style={{marginTop: "15px"}}>Psychiatry
              </div>
              <div className="text-gray-600">Reports based on PRO questionnaires saved Mayo clinic physicians an average of 15 minutes during initial psychiatric evaluations
              </div>
            </div>

          </div>

          <div className="max-w-3xl mx-auto text-center" style={{paddingBottom: "4rem"}}>
            <p className="text-xl text-gray-800">
              Aermed helps bring these benefits to your hospital or practice with a simple workflow
            </p>
          </div>


          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Patient first technology</h3>
                <p className="text-xl text-gray-600">We've interviewed dozens of patients, and used their feedback to design the most user friendly patient reported outcomes app on the market</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">The features your patients need</div>
                    <div className="text-gray-600">Through a single interface, patients can keep track of their surveys and medication schedule</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <FaBolt/>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Personalized surveys</div>
                    <div className="text-gray-600">Our adaptive survey technology leverages clinically tested PROs, unique to your field, that takes the guesswork out of your patient questionnaires</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <FaClipboardList/>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Powerful and secure authentication</div>
                    <div className="text-gray-600">We can leverage your existing EHR to allow patients to securely register with their existing accounts in your EMR</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <FaLock/>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/home_screen_2.png')} width="300" height="500" alt="Features bg" />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/survey_screen.png')} width="300" height="500" alt="Features bg" />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={require('../images/sign_in_screen.png')} width="300" height="500" alt="Features bg" />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default FeaturesHome;
