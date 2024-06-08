import { FaMap, FaCalendarAlt, FaAirbnb } from 'react-icons/fa'
import React from 'react'
import { IconType } from 'react-icons'
import Image from 'next/image'
/* -------------------------------------------------------------------------- */
/*                                  features                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- hirer --------------------------------- */
export const HIRERFEATURES = [
  {
    title: 'Post a job',
    Icon: FaMap,
    description: 'Send a ping to workers in your town.'
  },
  {
    title: 'Receive Requests',
    Icon: FaCalendarAlt,
    description: 'Requests from workers in town.'
  },
  {
    title: 'Select worker & Pay',
    Icon: FaAirbnb,
    description: 'Payment is held at Colony until job is complete'
  }
]
/* --------------------------------- worker --------------------------------- */
export const WORKERFEATURES = [
  {
    title: 'Get Notified',
    Icon: FaMap,
    description: 'Receive notifications on jobs in your town.'
  },
  {
    title: 'Request Job',
    Icon: FaCalendarAlt,
    description: 'Request a job that you want to do'
  },
  {
    title: 'Complete & Get Paid',
    Icon: FaAirbnb,
    description:
      'Send an image of job completion, payouts directly to bank account'
  }
]
/* ------------------------------ feature item ------------------------------ */
type FeatureItemProps = {
  title: string
  Icon: IconType
  description: string
}

const FeatureItem = ({ title, Icon, description }: FeatureItemProps) => {
  return (
    <li className='flex w-full gap-4'>
      <div className='flex self-center rounded-full bg-yellow-50 p-4 lg:p-5'>
        {Icon && <Icon className='text-2xl' color='white' />}
      </div>
      <div className=''>
        <dt className='bold-20 lg:bold-32 capitalize'>{title}</dt>
        <dd className='regular-16 bg-white/80 text-gray-30 lg:bg-none'>
          {description}
        </dd>
      </div>
    </li>
  )
}

/* ------------------------------- feature set ------------------------------ */

type FeatureSetProps = {
  title: string
  features: FeatureItemProps[]
}

const FeatureSet = ({ title, features }: FeatureSetProps) => {
  return (
    <div className='flex flex-1 flex-col'>
      <h3 className='bold-40 lg:bold-40'>{title}</h3>
      <ul className='mt-14 flex flex-col gap-11'>
        {features.map((feature) => (
          <FeatureItem
            key={feature.title}
            title={feature.title}
            Icon={feature.Icon}
            description={feature.description}
          />
        ))}
      </ul>
    </div>
  )
}
/* --------------------------------- return --------------------------------- */
const AppFeatures = () => {
  return (
    <section className='flexCenter flex-col overflow-hidden bg-custom-feat bg-no-repeat py-24'>
      <div className='max-container padding-container relative flex w-full justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src='/phone.png'
            alt='phone'
            width={440}
            height={1000}
            className='feature-phone'
          />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <text className='absolute left-[2px] top-[-18px] w-10 text-4xl lg:w-[50px]'>
              🐝
            </text>
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>
          <div className='gap-10 py-10 lg:flex'>
            {/* hirer */}
            <FeatureSet features={HIRERFEATURES} title='Hirer' />
            {/* worker */}
            <FeatureSet features={WORKERFEATURES} title='Worker' />
          </div>
          <div className='bg-red-500'>
            <div>
              <h3>New Location coming Later!</h3>
            </div>
            <div>
              <h3>Dispute support</h3>
            </div>
          </div>
        </div>

        {/* shared */}
      </div>
    </section>
  )
}

export default AppFeatures
