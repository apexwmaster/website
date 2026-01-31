import * as React from "react"

import { cn } from "@/lib/utils"

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, isRequired, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        )}
        {...props}
      >
        <span className="inline-flex items-center gap-1">
          {children}
          {isRequired && (
            <span className="text-xs font-semibold text-primary">*</span>
          )}
        </span>
      </label>
    )
  }
)
Label.displayName = "Label"

export { Label }

