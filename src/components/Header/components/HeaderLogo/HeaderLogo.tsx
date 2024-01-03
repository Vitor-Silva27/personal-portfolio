import Image from "next/image"

export const HeaderLogo = () => {
  return (
    <Image 
      src="/logo.svg"
      alt="Logo"
      width={125}
      height={55}
    />
  )
}
