import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus:ring-2 ring-offset-1 ease-in-out duration-200',
  {
    variants: {
      variant: {
        default:
          'bg-primary-1 hover:bg-primary-1/90 text-shades-1 ring-gradients-1 ',
        secondary:
          'bg-shades-2 text-shades-1 hover:bg-shades-2/90 ring-shades-2',
        tertiary:
          'border border-shades-2 hover:bg-shades-2/10 bg-shades-2/5 text-shades-2 focus:ring-0 focus-visible:ring-0',
      },
      size: {
        'full-width': 'rounded-lg px-8 py-3 w-full',
        'sm': 'rounded-xl py-3 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'full-width',
    },
  },
);

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        data-cy={`${variant}-button, variant ${variant}`}
        {...props}
      />
    );
  },
);

export { Button };
