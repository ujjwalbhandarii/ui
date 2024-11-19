import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
      />
    );
  },
);
