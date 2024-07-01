import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ReactNode } from 'react'

/* -------------------------------------------------------------------------- */
/*                                  card grid                                 */
/* -------------------------------------------------------------------------- */

export const CardGrid = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
<<<<<<< Updated upstream
        'grid w-full grid-cols-1 gap-4 md:auto-rows-[30rem] md:grid-cols-6',
=======
        'grid w-full auto-rows-[40rem] grid-cols-1 gap-4 md:grid-cols-6',
>>>>>>> Stashed changes
        className
      )}
    >
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                               card grid item                               */
/* -------------------------------------------------------------------------- */
type CardProps = React.ComponentProps<typeof Card>

interface CardGridItemProps {
  className?: string
  item: {
    title: string
    description?: string
    content: ReactNode
    titlePosition?: 'left' | 'right' | 'top' | 'bottom'
  }
  props?: CardProps
}

export const CardGridItem = ({
  className,
  item,
  ...props
}: CardGridItemProps) => {
  return (
    <Card className={cn('flex h-full flex-col bg-black', className)} {...props}>
      {/* top */}
      {item.titlePosition === 'top' && (
        <CardHeader>
<<<<<<< Updated upstream
          <CardTitle>{item.title}</CardTitle>
=======
          <CardTitle className='text-3xl'>{item.title}</CardTitle>
>>>>>>> Stashed changes
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
      )}
      {/* sides left or right w/ content*/}
      {(item.titlePosition === 'left' || item.titlePosition === 'right') && (
        <div className='flex h-full flex-col md:flex-row'>
          {item.titlePosition === 'left' && (
            <CardHeader className='flex w-full flex-col justify-center md:w-1/4'>
<<<<<<< Updated upstream
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          )}
          <CardContent className='flex min-h-[200px] flex-grow items-center justify-center overflow-hidden sm:min-h-[300px]'>
=======
              <CardTitle className='text-3xl md:text-5xl'>
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          )}
          <CardContent className='flex min-h-[200px] flex-grow overflow-hidden sm:min-h-[300px]'>
>>>>>>> Stashed changes
            {item.content}
          </CardContent>
          {item.titlePosition === 'right' && (
            <CardHeader className='flex w-full flex-col justify-center md:w-1/4'>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          )}
        </div>
      )}
      {/* vertical content */}
      {item.titlePosition !== 'left' && item.titlePosition !== 'right' && (
<<<<<<< Updated upstream
        <CardContent className='flex min-h-[200px] flex-grow items-center justify-center overflow-hidden sm:min-h-[300px]'>
=======
        <CardContent className='flex min-h-[200px] flex-grow items-center justify-center overflow-hidden p-0 sm:min-h-[300px]'>
>>>>>>> Stashed changes
          {item.content}
        </CardContent>
      )}
      {/* bottom */}
      {item.titlePosition === 'bottom' && (
        <CardFooter className='flex flex-col'>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardFooter>
      )}
    </Card>
  )
}
