'use client'
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[425px]">
        <SelectValue placeholder="Select a Preferred Destination" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        
          
          <SelectItem value="US">US</SelectItem>
          <SelectItem value="UK">UK</SelectItem>
          <SelectItem value="AUSTRALIA">AUSTRALIA</SelectItem>
          <SelectItem value="CANADA">CANADA</SelectItem>
          <SelectItem value="IRELAND">IRELAND</SelectItem>
          <SelectItem value="NEW ZEALAND">NEW ZEALAND</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
