import React from 'react'
import Link from 'next/link'

export default function SimpleLink({ text, url, className }) {
  return (
    <Link className={className} href={url}>
      {text}
    </Link>
  )
}
