"use client";
import React from "react";
import { usePathname } from "next/navigation";


export default function Breadcrumb({ course }: { course: { title: string } | undefined; }) {
 const pathname = usePathname();
 return (
   <span>
     {course?.title} &gt; {pathname.split("/").pop()}
   </span>
 );
}
