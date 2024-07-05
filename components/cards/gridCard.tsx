import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
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
        'mx-auto grid w-full auto-rows-[40rem] grid-cols-1 gap-4 md:grid-cols-6',
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
    title?: string
    description?: string
    content?: ReactNode
  }
  props?: CardProps
}

export const CardGridItem = ({
  className,
  item,
  ...props
}: CardGridItemProps) => {
  return (
    <Card
      className={cn(
        'flex h-full flex-col rounded-3xl border-2 bg-black',
        className
      )}
      {...props}
    >
      {/* top */}
      <CardHeader>
        <CardTitle className='text-4xl'>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>

      {/* vertical content */}
      <CardContent className='flex min-h-[200px] flex-grow items-center justify-center overflow-hidden p-0 sm:min-h-[300px]'>
        {item.content}
      </CardContent>
    </Card>
  )
}
