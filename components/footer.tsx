import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Generated responses may display inaccurate or offensive information that doesn’t represent JEF Galicia’s, JEF Bordeaux’s or Jean Monnet’s views. By using ChatMonnet, you agree to our{' '}
      <ExternalLink href="/legal">
        terms of use
      </ExternalLink>
      .
    </p>
  )
}
