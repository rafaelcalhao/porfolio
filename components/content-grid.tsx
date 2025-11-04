import { cva } from "class-variance-authority";
import {  type ReactNode } from "react";



export const ContentGrid = (children: ReactNode) => {
  
  
  return (
    <div className="grid 2xl:grid-cols-2 gap-4">
      {children}
    </div>
  )
}