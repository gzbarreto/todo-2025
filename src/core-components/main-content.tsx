import { cx } from "class-variance-authority"

type MainContentProps = React.ComponentProps<"main">

export default function MainContent({
  children,
  className,
  ...props
}: MainContentProps) {
  return <main className={cx("md:mt-8 mt-4", className)} {...props}>{children}</main>
}
