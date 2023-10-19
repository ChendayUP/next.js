import Link from 'next/link'

export default function IndexPage() {
  return (
    <>
      <div>
        Hello World. <Link href="/about">About</Link>
      </div>
      {/* <ul>
        <li><Link href="facebook/react">facebook/react</Link></li>
        <li><Link href="vercel/next.js">vercel/next.js</Link></li>
        <li><Link href="framer/motion">framer/motion</Link></li>
        <li><Link href="tailwindlabs/tailwindcss">tailwindlabs/tailwindcss</Link></li>
      </ul> */}
    </>
  )
}
