export const Separator = (
  { children, text }: Readonly<{ children?: React.ReactNode, text?:string }>,

) => {
  return (
    <div
      className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
      {children ? (
        children
      ) : text ? (
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          {text}
        </span>
      ) : null}
    </div>
  )
}