import React from 'react'
import Image from 'next/image'
import transactionImage from '@/assets/images/manCheckingTransaction.png'

function Security() {
    return (
        <div className='max-w-6xl mx-auto py-6 md:py-10 px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
            <div className='space-y-8 py-4 md:py-6 pr-4'>
                <div className='space-y-4 pb-2'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-[#010101]'>Security You Can Trust</h2>
                    <p className='text-lg font-medium'>
                        Every transaction on Kobo Vault is protected with the highest standards
                        of security, giving you peace of mind.
                    </p>
                </div>


                <div className='flex gap-4 items-center'>
                    <div>
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.0273438" width="60" height="60" rx="10" fill="#F2EFFF" />
                            <path d="M21.9297 33.9065L33.8797 21.9565" stroke="#7D66F2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M29.1016 36.3064L30.3016 35.1064" stroke="#7D66F2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M31.793 33.6161L34.183 31.2261" stroke="#7D66F2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.6013 28.2663L28.2413 21.6263C30.3613 19.5063 31.4213 19.4963 33.5213 21.5963L38.4313 26.5063C40.5313 28.6063 40.5213 29.6663 38.4013 31.7863L31.7613 38.4263C29.6413 40.5463 28.5813 40.5563 26.4813 38.4563L21.5713 33.5463C19.4713 31.4463 19.4713 30.3963 21.6013 28.2663Z" stroke="#7D66F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 40.0259H40" stroke="#7D66F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                    </div>
                    <div>
                        <h3 className='font-semibold text-lg md:text-2xl text-[#010101]'>Virtual Cards</h3>
                        <p className='text-sm md:text-base text-[#363E3F]'>Shop and subscribe online safely without exposing your
                            main account details.</p>
                    </div>
                </div>


                <div className='flex gap-4 items-center'>
                    <div>
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.0273438" width="60" height="60" rx="10" fill="#DFFFF3" />
                            <path d="M24 28.0273V26.0273C24 22.7173 25 20.0273 30 20.0273C35 20.0273 36 22.7173 36 26.0273V28.0273" stroke="#0DD68B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30 36.5273C31.3807 36.5273 32.5 35.4081 32.5 34.0273C32.5 32.6466 31.3807 31.5273 30 31.5273C28.6193 31.5273 27.5 32.6466 27.5 34.0273C27.5 35.4081 28.6193 36.5273 30 36.5273Z" stroke="#0DD68B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M35 40.0273H25C21 40.0273 20 39.0273 20 35.0273V33.0273C20 29.0273 21 28.0273 25 28.0273H35C39 28.0273 40 29.0273 40 33.0273V35.0273C40 39.0273 39 40.0273 35 40.0273Z" stroke="#0DD68B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>


                    </div>
                    <div>
                        <h3 className='font-semibold text-lg md:text-2xl text-[#010101]'>Bank-Grade Encryption</h3>
                        <p className='text-sm md:text-base text-[#363E3F]'>Advanced protection ensures your money and data
                            are always secure.</p>
                    </div>
                </div>
            </div>


            <div className=''>
                <Image src={transactionImage} alt='transaction-image' width={600} height={600} className='object-cover' />

            </div>
        </div>
    )
}

export default Security