'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

  import { TextGenerateEffecttt } from "../ui/text-generate-effect";

  const uswords = `Cost of Education in USA`;
  const ukwords = `Cost of Education in UK`;
  const auswords = `Cost of Education in Australia`;
  const canwords = `Cost of Education in Canada`;
  const irewords = `Cost of Education in Ireland`;

  const usa = [
    {
      Types_of_Expenses: "Tuition Fees for one-year (Indicative)*",
      Annual_Expenses_in_USD: "25000",
      
    },
    {
        Types_of_Expenses: "Living and Accommodation",
        Annual_Expenses_in_USD: "15000",
        
      },
      {
        Types_of_Expenses: "Airfare from India to USA",
        Annual_Expenses_in_USD: "1000",
        
      },
      {
        Types_of_Expenses: "Visa Fees (Visa & SEVIS)",
        Annual_Expenses_in_USD: "535",
        
      },
  ]

  const uk = [
    {
      Types_of_Expenses: "Tuition Fees for one-year (Indicative)*",
      Annual_Expenses_in_USD: "14000",
      
    },
    {
        Types_of_Expenses: "Living and Accommodation",
        Annual_Expenses_in_USD: "9207",
        
      },
      {
        Types_of_Expenses: "Visa Fees",
        Annual_Expenses_in_USD: "490",
        
      },
      {
        Types_of_Expenses: "Immigration Health Surcharge/National Health Surcharge",
        Annual_Expenses_in_USD: "1164",
        
      },
      {
        Types_of_Expenses: "Airfare from India to UK",
        Annual_Expenses_in_USD: "500",
        
      },
  ]
  
  const aus = [
    {
      Types_of_Expenses: "Tuition Fees for one-year (Indicative)*",
      Annual_Expenses_in_USD: "35000",
      
    },
    {
        Types_of_Expenses: "Living and Accommodation",
        Annual_Expenses_in_USD: "24505",
        
      },
      {
        Types_of_Expenses: "Airfare to Australia (Indicative)",
        Annual_Expenses_in_USD: "2000",
        
      },
      {
        Types_of_Expenses: "Visa Fees",
        Annual_Expenses_in_USD: "710",
        
      },
     
      
  ]

  const canada = [
    {
      Types_of_Expenses: "Tuition Fees for one-year (Indicative)*",
      diploma: "17000",
      degree: "20000",
      
    },
    {
        Types_of_Expenses: "Living and Accommodation",
        diploma: "20635",
        degree: "20635",
        
      }, 
      {
        Types_of_Expenses: "Airfare from India to Canada",
        diploma: "2500",
        degree: "2500",
        
      },
      {
        Types_of_Expenses: "Tuition Fees for one-year (Indicative)*",
        diploma: "235",
        degree: "235",
        
      },
     
      
  ]

  const ire = [
    {
      Types_of_Expenses: "Tuition Fees for one-year (Indicative)*",
      Annual_Expenses_in_USD: "15000",
      
    },
    {
        Types_of_Expenses: "Living and Accommodation",
        Annual_Expenses_in_USD: "10000",
        
      },
      {
        Types_of_Expenses: "Airfare to Ireland (Indicative)",
        Annual_Expenses_in_USD: "700",
        
      },
      {
        Types_of_Expenses: "Visa Fees",
        Annual_Expenses_in_USD: "195",
        
      },
     
      
  ]

  const newz = [
    {
      Types_of_Expenses: "Tuition Fees for one-year (Indicative)*",
      Annual_Expenses_in_USD: "25000",
      
    },
    {
        Types_of_Expenses: "Living and Accommodation",
        Annual_Expenses_in_USD: "20000",
        
      },
      {
        Types_of_Expenses: "Airfare to New Zealand (Indicative)",
        Annual_Expenses_in_USD: "2000",
        
      },
      {
        Types_of_Expenses: "Visa Fees",
        Annual_Expenses_in_USD: "430",
        
      },
     
      
  ]



  export function TableDemo() {
    return (
        <div className=" -mt-5 ">
            <TextGenerateEffecttt words={uswords} />

      <Table className="w-[40rem] mt-8 ml-[25rem] mb-2">
       
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Types of Expenses</TableHead>
            
            <TableHead className="text-right">Annual Expenses in USD</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {usa.map((usa) => (
            <TableRow key={usa.Types_of_Expenses}>
              <TableCell className="font-medium text-white whitespace-nowrap">{usa.Types_of_Expenses}</TableCell>
              
              <TableCell className="text-right text-white">{usa.Annual_Expenses_in_USD}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell className="text-right">$41535</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }
  
  export function Tableuk() {
    return (
        <div className=" -mt-5 ">
            <TextGenerateEffecttt words={ukwords} />

      <Table className="w-[40rem] mt-8 ml-[25rem] mb-2">
       
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Types of Expenses</TableHead>
            
            <TableHead className="text-right">Annual Expenses in GBP</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {uk.map((uk) => (
            <TableRow key={uk.Types_of_Expenses}>
              <TableCell className="font-medium text-white whitespace-nowrap">{uk.Types_of_Expenses}</TableCell>
              
              <TableCell className="text-right text-white">{uk.Annual_Expenses_in_USD}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}>Total Expenses</TableCell>
            <TableCell className="text-right">24775</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }
  
  export function Tableaus() {
    return (
        <div className=" -mt-5 ">
            <TextGenerateEffecttt words={auswords} />

      <Table className="w-[40rem] mt-8 ml-[25rem] mb-2">
       
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Types of Expenses</TableHead>
            
            <TableHead className="text-right">Annual Expenses in AUD</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {aus.map((aus) => (
            <TableRow key={aus.Types_of_Expenses}>
              <TableCell className="font-medium text-white whitespace-nowrap">{aus.Types_of_Expenses}</TableCell>
              
              <TableCell className="text-right text-white">{aus.Annual_Expenses_in_USD}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}>Total Expenses</TableCell>
            <TableCell className="text-right">62215</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }


  export function Tablecanada() {
    return (
        <div className=" -mt-5 ">
            <TextGenerateEffecttt words={canwords} />

      <Table className="w-[40rem] mt-8 ml-[25rem] mb-2">
       
        <TableHeader>
          <TableRow>
            <TableHead colSpan={2} className="w-[100px]">Types of Expenses</TableHead>
            
            <TableHead colSpan={2} className="text-center">Annual Expenses</TableHead>
            
          </TableRow>
          <TableRow>
            <TableHead colSpan={2} className="w-[100px]"></TableHead>
            

            <TableHead className="ml-6" >Diploma</TableHead>
            
            <TableHead className="text-right">Degree</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody className="gap-4">
          {canada.map((canada) => (
            <TableRow key={canada.Types_of_Expenses}>
              <TableCell colSpan={2} className="font-medium text-white whitespace-nowrap">{canada.Types_of_Expenses}</TableCell>
              <TableCell className=" text-white ml-6">{canada.degree}</TableCell>
              
              <TableCell className="text-right text-white">{canada.diploma}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total Expenses</TableCell>
            <TableCell >40370</TableCell>
            <TableCell className="text-right">43370</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }
  
  export function Tableire() {
    return (
        <div className=" -mt-5 ">
            <TextGenerateEffecttt words={irewords} />

      <Table className="w-[40rem] mt-8 ml-[25rem] mb-2">
       
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Types of Expenses</TableHead>
            
            <TableHead className="text-right">Annual Expenses in €</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {ire.map((ire) => (
            <TableRow key={ire.Types_of_Expenses}>
              <TableCell className="font-medium text-white whitespace-nowrap">{ire.Types_of_Expenses}</TableCell>
              
              <TableCell className="text-right text-white">{ire.Annual_Expenses_in_USD}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}>Total Expenses</TableCell>
            <TableCell className="text-right">25895</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }

  export function Tablenewz() {
    return (
        <div className=" -mt-5 ">
            <TextGenerateEffecttt words={irewords} />

      <Table className="w-[40rem] mt-8 ml-[25rem] mb-2">
       
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Types of Expenses</TableHead>
            
            <TableHead className="text-right">Annual Expenses in NZD</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {newz.map((newz) => (
            <TableRow key={newz.Types_of_Expenses}>
              <TableCell className="font-medium text-white whitespace-nowrap">{newz.Types_of_Expenses}</TableCell>
              
              <TableCell className="text-right text-white">{newz.Annual_Expenses_in_USD}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}>Total Expenses</TableCell>
            <TableCell className="text-right">47430</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }