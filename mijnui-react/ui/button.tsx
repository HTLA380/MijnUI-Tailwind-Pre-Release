import * as React from "react"
import { UnstyledProps } from "@/mijnui-react/types"
import { applyUnstyled } from "@/mijnui-react/utils"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import { LuLoader2 } from "react-icons/lu"

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-1 transition-colors <duration-300></duration-300> ease-in-out active:brightness-90 text-sm disabled:pointer-events-none disabled:brightness-75 disabled:opacity-80",
  ],
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        surface: "",
        danger: "",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      appearance: {
        filled: "",
        outline: "border border-current",
        text: "bg-transparent",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        appearance: "outline",
        className:
          "hover:bg-primary hover:text-primary-foreground border border-primary text-primary",
      },
      {
        variant: "secondary",
        appearance: "outline",
        className:
          "hover:bg-secondary hover:text-secondary-foreground border border-secondary text-secondary",
      },
      {
        variant: "surface",
        appearance: "outline",
        className:
          "hover:bg-surface hover:text-surface-foreground border border-surface-foreground text-surface-foreground",
      },
      {
        variant: "danger",
        appearance: "outline",
        className:
          "hover:bg-red-500 hover:text-white border border-red-500 text-red-500",
      },

      {
        variant: "primary",
        appearance: "outline",
        className:
          "hover:bg-primary hover:text-primary-foreground border border-primary text-primary",
      },

      {
        variant: "primary",
        appearance: "text",
        className:
          "hover:bg-primary hover:text-primary-foreground text-primary",
      },
      {
        variant: "secondary",
        appearance: "text",
        className:
          "hover:bg-secondary hover:text-secondary-foreground text-secondary",
      },
      {
        variant: "surface",
        appearance: "text",
        className:
          "hover:bg-surface hover:text-surface-foreground text-surface-foreground",
      },
      {
        variant: "danger",
        appearance: "text",
        className: "hover:bg-red-500 hover:text-white text-red-500",
      },

      {
        variant: "primary",
        appearance: "outline",
        className:
          "hover:bg-primary hover:text-primary-foreground border border-primary text-primary",
      },

      {
        variant: "primary",
        appearance: "filled",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "secondary",
        appearance: "filled",
        className:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      },
      {
        variant: "danger",
        appearance: "filled",
        className: "bg-danger text-danger-filled-foreground hover:bg-danger/80",
      },
      {
        variant: "surface",
        appearance: "filled",
        className: "bg-surface border text-surface-foreground hover:bg-accent",
      },
    ],
    defaultVariants: {
      appearance: "filled",
      variant: "primary",
      radius: "md",
      size: "md",
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean
    loading?: boolean
  } & UnstyledProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      unstyled,
      className,
      variant,
      appearance,
      size,
      radius,
      loading,
      disabled,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button"

    return (
      <Component
        className={applyUnstyled(
          unstyled,
          buttonStyles({ variant, appearance, size, radius }),
          className,
        )}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {loading && (
          <LuLoader2
            className={applyUnstyled(
              unstyled,
              "mr-2 h-5 w-5 animate-spin text-current",
            )}
          />
        )}
        <Slottable>{loading ? "Loading..." : children}</Slottable>
      </Component>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonStyles }
