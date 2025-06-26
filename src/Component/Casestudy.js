import React, { useState } from 'react';
import Merce from '../Images/merce.png'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";




const Casestudy = () => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    const [accordionOpen1, setAccordionOpen1] = useState(false);
    const [accordionOpen2, setAccordionOpen2] = useState(false);
    const [accordionOpen3, setAccordionOpen3] = useState(false);

    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen);
        // setAccordionOpen1(false);
        // setAccordionOpen2(false);
        // setAccordionOpen3(false);
    };

    const toggleAccordion1 = () => {
        // setAccordionOpen(false);
        setAccordionOpen1(!accordionOpen1);
        // setAccordionOpen2(false);
        // setAccordionOpen3(false);
    };

    const toggleAccordion2 = () => {
        // setAccordionOpen(false);
        // setAccordionOpen1(false);
        setAccordionOpen2(!accordionOpen2);
        // setAccordionOpen3(false);
    };
    const toggleAccordion3 = () => {
        // setAccordionOpen(false);
        // setAccordionOpen1(false);
        // setAccordionOpen2(false);
        setAccordionOpen3(!accordionOpen3);
    };
    return (
        <>
            <section className='d-flex'>
                <div className='w-20 d-flex justify-content-center mt-5'>
                    <img className='brand-logo-case' src={Merce} />
                </div>
                <div className='w-80'>
                    <section className='about-faq-section'>
                        <div className='about-text mb-9'>CASE STUDY: Brand</div>
                        <div>
                            <div className='gifimageplac text-wrapper-2sdfj d-flex mt-3 align-items-center'>
                                <div className='circlebefore'></div>
                                Customer

                            </div>
                        </div>
                        <div className='about-faq-textf ml-3 jhjhgjh'>
                            To stay ahead in this rapidly changing world, you need a partner that can help you articulate your vision, enable your workforce to deliver new asks, and ensure that your stakeholders resonate your brand values. We are such a partner for brands across the globe - ensuring that they thrive amidst the ongoing flux.
                        </div>
                        <hr className='w-998' />


                        <section>
                            <div className='faqs'><div style={{ width: '50%', paddingTop: '7px', paddingBottom: '7px', backgroundColor: accordionOpen ? 'white' : 'white' }}>
                                <div onClick={toggleAccordion} style={{ cursor: 'pointer' }} className="text-wrapper-2sdfj d-flex justify-content-between">  <div className='d-flex align-items-center'>
                                    <div className='circlebefore'></div>
                                    Need
                                </div>
                                    <div>{accordionOpen ? <FaMinus className='FaMinus' /> : <FaPlus className='FaMinus' />}</div>
                                </div>
                                <div style={{ height: accordionOpen ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                                    <div className='mainadanfskjndfjsdjf'>
                                        <div className='about-faq-textf ml-3 '>Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.</div>
                                        <div><img className="mainimagein-faq" src='' /></div>
                                        <img className='mt-3 ml-3 ' src='https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                                        <div className='about-faq-textf ml-3 mt-9'>Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.</div>
                                    </div>
                                </div>
                            </div></div>
                            <hr className='w-998' />

                            <div className='faqs'><div style={{ width: '50%', paddingTop: '7px', paddingBottom: '7px', backgroundColor: accordionOpen ? 'white' : 'white' }}>
                                <div onClick={toggleAccordion1} style={{ cursor: 'pointer' }} className="text-wrapper-2sdfj d-flex justify-content-between">  <div className='d-flex align-items-center'>
                                    <div className='circlebefore'></div>
                                    BrandKiln Solution
                                </div>
                                    <div> {accordionOpen1 ? <FaMinus className='FaMinus1' /> : <FaPlus className='FaMinus1' />}</div>
                                </div>
                                <div style={{ height: accordionOpen1 ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                                <div className='mainadanfskjndfjsdjf'>
                                    <div className='about-faq-textf ml-3 '>Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.</div>
                                    <div><video className="mt-3 ml-3 fghdjkfgjdg"  src='https://videos.pexels.com/video-files/3066463/3066463-uhd_4096_2160_24fps.mp4' /></div>
                                    <div className='about-faq-textf ml-3 '>Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.</div>
                                </div>
                                </div>
                            </div></div>
                            <hr className='w-998' />

                            <div className='faqs'><div style={{ width: '50%', paddingTop: '7px', paddingBottom: '7px', backgroundColor: accordionOpen ? 'white' : 'white' }}>
                                <div onClick={toggleAccordion2} style={{ cursor: 'pointer' }} className="text-wrapper-2sdfj d-flex justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <div className='circlebefore'></div>
                                        Result
                                    </div>

                                    <div>  {accordionOpen2 ? <FaMinus className='FaMinus2' /> : <FaPlus className='FaMinus2' />}</div>
                                </div>
                                <div style={{ height: accordionOpen2 ? 'auto' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                                <div className='mainadanfskjndfjsdjf'>
                                    <div className='about-faq-textf ml-3 '>Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.</div>
                                    <div><img className="mainimagein-faq" src='' /></div>
                                </div>
                            </div>
                            </div>
                            </div>
                            <hr className='w-998' />

                            <div className='faqs'><div style={{ width: '50%', paddingTop: '7px', paddingBottom: '7px', backgroundColor: accordionOpen ? 'white' : 'white' }}>
                                <div onClick={toggleAccordion3} style={{ cursor: 'pointer' }} className="text-wrapper-2sdfj d-flex justify-content-between">
                                    <div className='d-flex align-items-center'>
                                        <div className='circlebefore'></div>
                                        Impact
                                    </div>

                                    <div>{accordionOpen3 ? <FaMinus className='FaMinus2' /> : <FaPlus className='FaMinus2' />}</div>
                                </div>
                                <div style={{ height: accordionOpen3 ? '140px' : '0', overflow: 'hidden', transition: 'height 0.3s ease-in-out', backgroundColor: 'white' }} className='mainupertext'>
                                    <div className='mainadanfskjndfjsdjf'>
                                        <div className='about-faq-textf ml-3 '>Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.Tincidunt lobortis amet blandit dictumst risus sed. Tempor eu ullamcorper rutrum donec.</div>
                                        <div><img className="mainimagein-faq" src='' /></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            




                        </section>
                        <div className='d-flex justify-content-between  w-998 mt-5 mb-5 align-items-center'>
                                <div><FaCaretLeft /> PREVIOUS</div>
                                <div>NEXT <FaCaretRight /></div>

                            </div>
                    </section>



                </div>

            </section>
            <section className='backgroundimagedf d-flex'>
                <div className='w-50 d-flex  sfghshjdj'>
                <FaRegArrowAltCircleRight className='dfkkkghfehgb'/>
       <span>Engage us for your<br/> Brand Positioning project</span> 
                </div>
                <div className='w-50 m-5'>
                    <div className='glassblack p-3 d-flex flex-column gap-3'>
                        <div className='form_id'>Name <input className='inputrir'/></div>
                        <div className='form_id'>Email_id <input className='inputrir'/></div>
                        <div className='form_id'>Mobile <input className='inputrir'/></div>
                        <div className='form_id'>Company <input className='inputrir'/></div>
                        <div className='form_id'>Designation <input className='inputrir'/></div>
                        <div className='form_id fjgkdfbtn'>Beam it up, Scottie!</div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Casestudy