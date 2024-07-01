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
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-6',
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

interface CardGridProps {
  className?: string
  item: {
    title: string
    description?: string
    content: ReactNode
  }
  props?: CardProps
}

export const CardGridItem = ({ className, item, ...props }: CardGridProps) => {
  return (
    <Card className={cn('flex h-full flex-col', className)} {...props}>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-grow items-center justify-center overflow-hidden'>
        {item.content}
      </CardContent>
    </Card>
  )
}
