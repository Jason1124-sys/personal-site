import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
// import { socialMedia } from '@/data';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to transform <span className="text-purple">your vision</span> {' '}
                    into a digital reality?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to us today and let&apos;s discuss how we can help you
                    achieve your goals.
                </p>
                <a href="mailto:edwardjphp971@gmail.com">
                    <MagicButton
                        title="EMAIL US"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2026 CBTech Team
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    <a
                        href="https://calendly.com/edwardjphp971/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#161a31] px-6 py-3 text-white hover:bg-[#242a4a]"
                    >
                        Book A Call <FaCalendarAlt />
                    </a>

                    <a
                        href="https://wa.me/639566796478"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#161a31] px-6 py-3 text-white hover:bg-[#242a4a]"
                    >
                        WhatsApp US <FaWhatsapp />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
