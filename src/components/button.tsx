import { cva, type VariantProps } from "class-variance-authority"
import Icon from "./icon"
import Text from "./text"
import SpinnerIcon from "../assets/icons/spinner.svg?react"

export const ButtonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-pink-light",
      },
      size: {
        md: "h-14 py-4 px-5",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
      handling: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
      handling: false,
    },
  }
)

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

//necessário omitir as variaveis size e disabled do type do button html para nao
//conflitar com as variantes do CVA
interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof ButtonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"]
  handling?: boolean
}

export default function Button({
  variant,
  size,
  disabled,
  handling,
  children,
  className,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={ButtonVariants({
        variant,
        size,
        disabled,
        className,
        handling,
      })}
      {...props}
    >
      {icon && (
        <Icon
          animate={handling}
          svg={handling ? SpinnerIcon : icon}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant={"body-md"} className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
