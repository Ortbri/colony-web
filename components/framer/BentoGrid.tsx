import { cn } from '@/utils/cn'

export const BentoGrid = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[40rem] md:grid-cols-6',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group/bento row-span-1 flex flex-1 flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className
      )}
      style={{ height: '100%', width: '100%' }} // Ensure it takes full height of the row
    >
      {/* header */}
      {header}
      {/* details */}
      <div className='flex flex-1 flex-col transition duration-200 group-hover/bento:translate-x-2'>
        {icon}
        <div className='mb-2 mt-2 font-sans text-4xl font-bold text-neutral-600 dark:text-neutral-200'>
          {title}
        </div>
        <div className='font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300'>
          {description}
        </div>
      </div>
    </div>
  )
}

// import { cn } from '@/utils/cn'

// export const BentoGrid = ({
//   className,
//   children
// }: {
//   className?: string
//   children?: React.ReactNode
// }) => {
//   return (
//     <div
//       className={cn(
//         'grid max-w-7xl gap-4 md:auto-rows-[30rem] md:grid-cols-4 lg:auto-rows-[50rem]',
//         className
//       )}
//     >
//       {children}
//     </div>
//   )
// }

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
//   titlePosition = 'top', // default position
//   spanClass = '' // to control spanning
// }: {
//   className?: string
//   title?: string | React.ReactNode
//   description?: string | React.ReactNode
//   header?: React.ReactNode
//   icon?: React.ReactNode
//   titlePosition?: 'top' | 'bottom' | 'left' | 'right'
//   spanClass?: string
// }) => {
//   return (
//     <div
//       className={cn(
//         `group/bento flex ${titlePosition === 'top' ? 'flex-col' : ''} ${titlePosition === 'bottom' ? 'flex-col-reverse' : ''} ${titlePosition === 'left' ? 'flex-row' : ''} ${titlePosition === 'right' ? 'flex-row-reverse' : ''} justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none`,
//         spanClass,
//         className
//       )}
//       style={{ height: '100%' }} // Ensure it takes full height of the row
//     >
//       {header}
//       <div className='flex items-center transition duration-200 group-hover/bento:translate-x-2'>
//         {icon}
//         <div
//           className={`mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 ${titlePosition === 'left' || titlePosition === 'right' ? 'ml-2' : ''}`}
//         >
//           {title}
//         </div>
//       </div>
//       <div className='font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300'>
//         {description}
//       </div>
//     </div>
//   )
// }
