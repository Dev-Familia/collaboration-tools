import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const [currentPath, setCurrentPath] = useState('')
  const { asPath, isReady } = useRouter()
  const getLinkStyle = (): React.CSSProperties => ({
    fontWeight: `/${currentPath}` === href ? 'bold' : 'normal',
  })

  useEffect(() => {
    if (isReady) {
      const activePathname = new URL(asPath, location.href).pathname.split(
        '/',
      )[1]
      setCurrentPath(activePathname)
    }
  }, [asPath, isReady, setCurrentPath])

  return (
    <Link href={href} passHref>
      <ChakraLink style={getLinkStyle()}>{children}</ChakraLink>
    </Link>
  )
}

export default NavLink
