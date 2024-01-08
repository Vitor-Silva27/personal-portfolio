export const HeaderRoot = ({children}: {children: React.ReactNode}) => {
  return (
    <header
        className="flex items-center justify-between px-8 pt-8 gap-8 md:px-28"
    >{children}</header>
  )
}
