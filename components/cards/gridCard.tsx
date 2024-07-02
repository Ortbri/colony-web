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
        'grid w-full auto-rows-[40rem] grid-cols-1 gap-4 md:grid-cols-6',
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
          <CardTitle className='text-3xl'>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
      )}
      {/* sides left or right w/ content*/}
      {(item.titlePosition === 'left' || item.titlePosition === 'right') && (
        <div className='flex h-full flex-col md:flex-row'>
          {item.titlePosition === 'left' && (
            <CardHeader className='flex w-full flex-col justify-center md:w-1/4'>
              <CardTitle className='text-3xl md:text-5xl'>
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          )}
          <CardContent className='flex min-h-[200px] flex-grow overflow-hidden p-0 sm:min-h-[300px]'>
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
        <CardContent className='flex min-h-[200px] flex-grow items-center justify-center overflow-hidden p-0 sm:min-h-[300px]'>
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
