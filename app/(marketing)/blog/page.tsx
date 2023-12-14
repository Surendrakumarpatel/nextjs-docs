"use client";
import { usePathname } from 'next/navigation'
import React from 'react'

const BlogPage = () => {
    const pathname  = usePathname();
    console.log(pathname);
    return (
        <div>BlogPage</div>
    )
}

export default BlogPage