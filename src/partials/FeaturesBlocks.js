import React, {useState} from 'react';
import {
  FaCogs,
  FaClipboardList,
  FaUserNurse,
  FaStopwatch,
  FaUsers,
  FaHandHoldingHeart,
  FaFlask
} from 'react-icons/fa';

function FeaturesBlocks() {

  const [value, setValue] = useState(true);

  const [features] = useState({
    feature1: {
      true: ['Easily integrate', 'Aermed can securely hook into your EMR using FHIR HL7 standards with an API or deliver reports accessible via PDF or web app'],
      false: ['Easily integrate', 'Aermed can securely hook into your EMR software using FHIR HL7 standards and can pass security audits with flying colors']
    },
    feature2: {
      true: ['Customize surveys', 'We offer pre-built surveys to track clinically verified PROs for patients and the ability to customize each survey to suit clinicians’ needs'],
      false: ['Customize surveys', 'We offer pre-built surveys to track clinically verified PROs for patients and the ability to customize each survey to suit clinicians’ needs']
    },
    feature3: {
      true: ['Coordinate care', 'Aermed tracks patient outcomes and medication adherence over time and can alert patients and providers when there is a need for follow-up care'],
      false: ['Coordinate care', 'Aermed tracks patient outcomes and medication adherence over time and can alert patients and providers when there is a need for follow-up care']
    },
    feature4: {
      true: ['Save time', 'Cut down on waiting room delays, spend less face time with patients on routine questions, and waste less time entering responses into the EMR'],
      false: ['Save time', 'Aermed logs all survey responses and writes them into your EMR, so staff can spend time on more important tasks']
    },
    feature5: {
      true: ['Generate referrals', 'Partner with us for social media campaigns to distribute surveys, help patients understand their conditions, and find them good doctors'],
      false: ['Support referrals', 'Aermed allows providers who don’t have time to review a full EHR to request and read a quick survey instead']
    },
    feature6: {
      true: ['Build patient trust', 'Aermed helps improve the patient-doctor relationship by explaining treatments and helping you customize your care'],
      false: ['Support research', 'Our secure, encrypted database to allow researchers to more easily access data to unlock new findings from PROs']
    }
  });

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">A flexible platform to fit your needs</h2>
            <p className="text-xl text-gray-600">Aermed can securely hook into your EMR software using FHIR HL7 standards with an API or deliver reports accessible via PDF or web app. This helps you focus on your patients and not worry about setting up or maintaining new technology.</p>
          </div>

          {/* Pricing toggle */}
          <div className="flex justify-center max-w-xs m-auto mb-16" data-aos="zoom-y-out" data-aos-delay="300">
            <div className="relative flex w-full mx-6 p-1 bg-gray-200 rounded">
                <span
                    className="absolute inset-0 m-1 pointer-events-none"
                    aria-hidden="true"
                >
                  <span className={`absolute inset-0 w-1/2 bg-white rounded shadow transform transition duration-150 ease-in-out ${value ? 'translate-x-0' : 'translate-x-full'}`}></span>
                </span>
              <button
                  className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${!value && 'text-gray-500'}`}
                  onClick={(e) => { e.preventDefault(); setValue(true); }}
              >Private Practices
              </button>
              <button
                  className={`relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out ${value && 'text-gray-500'}`}
                  onClick={(e) => { e.preventDefault(); setValue(false); }}
              >Hospitals</button>
            </div>
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div style={{
                backgroundColor: "#4b66ea",
                padding: "14px",
                fontSize: "1.6em",
                borderRadius: "100%",
                marginBottom: "12px"
              }}>
                <FaCogs style={{color: "#FFFFFF"}} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{features.feature1[value][0]}</h4>
              <p className="text-gray-600 text-center">{features.feature1[value][1]}</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div style={{
                backgroundColor: "#4b66ea",
                padding: "14px",
                fontSize: "1.6em",
                borderRadius: "100%",
                marginBottom: "12px"
              }}>
                <FaClipboardList style={{color: "#FFFFFF"}} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{features.feature2[value][0]}</h4>
              <p className="text-gray-600 text-center">{features.feature2[value][1]}</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div style={{
                backgroundColor: "#4b66ea",
                padding: "14px",
                fontSize: "1.6em",
                borderRadius: "100%",
                marginBottom: "12px"
              }}>
                <FaUserNurse style={{color: "#FFFFFF"}} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{features.feature3[value][0]}</h4>
              <p className="text-gray-600 text-center">{features.feature3[value][1]}</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div style={{
                backgroundColor: "#4b66ea",
                padding: "14px",
                fontSize: "1.6em",
                borderRadius: "100%",
                marginBottom: "12px"
              }}>
                <FaStopwatch style={{color: "#FFFFFF"}} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{features.feature4[value][0]}</h4>
              <p className="text-gray-600 text-center">{features.feature4[value][1]}</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div style={{
                backgroundColor: "#4b66ea",
                padding: "14px",
                fontSize: "1.6em",
                borderRadius: "100%",
                marginBottom: "12px"
              }}>
                <FaUsers style={{color: "#FFFFFF"}} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{features.feature5[value][0]}</h4>
              <p className="text-gray-600 text-center">{features.feature5[value][1]}</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div style={{
                backgroundColor: "#4b66ea",
                padding: "14px",
                fontSize: "1.6em",
                borderRadius: "100%",
                marginBottom: "12px"
              }}>
                { value ? <FaHandHoldingHeart style={{color: "#FFFFFF"}} /> : <FaFlask style={{color: "#FFFFFF"}} />}
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{features.feature6[value][0]}</h4>
              <p className="text-gray-600 text-center">{features.feature6[value][1]}</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
