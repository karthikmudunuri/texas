"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Moon, PenTool, PhoneCall, Star, Sun, Users, Video } from "lucide-react"



import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTriggerr,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuTriggerra,
} from "@/components/ui/navigation-menu"
import Image from "next/image"







export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList >
      {/* <NavigationMenuItem className="transparent-button">
            <ModeToggle />
        </NavigationMenuItem> */}


      
      <NavigationMenuItem className="transparent-button">
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/forstudents"
                  >
                    <Users className="h-6 w-6"/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      For Students
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                        Get the best guidance from our Texas experts.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem  >
                <Link href="/forinstitutes" className="no-underline" passHref>
                <div className="mb-2 mt-4 text-lg font-medium">
                For Institutes
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    See what we offer for Institues
                    </p>
                
                </Link>
              </ListItem>
              <ListItem  >
                <Link href="/forpartners" className="no-underline" passHref>

                <div className="mb-2 mt-4 text-lg font-medium">
                For Institutes
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    See what we offer for Partners
                    </p>
                

             
                </Link>
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="transparent-button">
          <NavigationMenuTrigger>Study Destinations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[360px] gap-3 p-4 md:w-[360px] md:grid-cols-2 lg:w-[460px] text-center">
            <ListItem  className="flex items-center space-x-2">
              <Link href="/usa" className="no-underline" passHref>
                <Image src="/images/USA.png" width={50} height={50} alt="USA" style={{ display: 'inline-block' }}/>
                <span style={{ display: 'inline-block' }}>USA</span>
                </Link>
                
            </ListItem>
            <ListItem  className="flex items-center space-x-2">
            <Link href="/uk" className="no-underline" passHref>
                <Image src="/images/uk.png" width={50} height={50} alt="UK" style={{ display: 'inline-block' }}/>
                <span style={{ display: 'inline-block' }}>UK</span>
                </Link>
                
            </ListItem>
            <ListItem  className="flex items-center space-x-2">
              <Link href="/australia" className="no-underline" passHref>
                <Image src="/images/Australia.png" width={50} height={50} alt="Australia" style={{ display: 'inline-block' }}/>
                <span style={{ display: 'inline-block' }}>AUSTRALIA</span>
                </Link>
                
            </ListItem>
            <ListItem  className="flex items-center space-x-2">
              <Link href="/canada" className="no-underline" passHref>
                <Image src="/images/Canada.png" width={50} height={50} alt="Canada" style={{ display: 'inline-block' }}/>
                <span style={{ display: 'inline-block' }}>CANADA</span>
                </Link>
                
            </ListItem>
            <ListItem className="flex items-center space-x-2">
              <Link href="/ireland" className="no-underline" passHref>
                <Image src="/images/Ireland.png" width={50} height={50} alt="Ireland" style={{ display: 'inline-block' }}/>
                <span style={{ display: 'inline-block' }}>IRELAND</span>
                </Link>
                
            </ListItem>
            <ListItem  className="flex items-center space-x-2 whitespace-nowrap">
              <Link href="/newzealand" className="no-underline" passHref>
                <Image src="/images/nz.png" width={50} height={50} alt="Newzealand" style={{ display: 'inline-block' }}/>
                <span style={{ display: 'inline-block' }}>NEW ZEALAND</span>
                </Link>
                
            </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="transparent-button">
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid w-[250px] gap-3 p-4 md:w-[480px] md:grid-cols-2 lg:w-[480px] text-center ">
            <ListItem className="flex items-center space-x-2">
              <Link href="/aboutus" className="no-underline" passHref>
                {/* <Image src="/images/USA.png" width={50} height={50} alt="USA" style={{ display: 'inline-block' }}/> */}
                <Star style={{ display: 'inline-block' , marginRight: '12px'}} size={20}/>
                <span style={{ display: 'inline-block' }}>ABOUT US</span>
                </Link>
                
            </ListItem>
            <ListItem className="flex items-center space-x-2">
              <Link href="/blogs" className="no-underline" passHref>
            <PenTool style={{ display: 'inline-block' , marginRight: '12px'}} size={20}/>
                <span style={{ display: 'inline-block' }}>BLOG</span>
                </Link>
            </ListItem>
           
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
         <NavigationMenuItem className="transparent-button">
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuTriggerr>
            
              Contact us
            </NavigationMenuTriggerr>
          </Link>
        </NavigationMenuItem>

        

        

        {/* <NavigationMenuItem className="transparent-button">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuTriggerr>
              Help
            </NavigationMenuTriggerr>
          </Link>
        </NavigationMenuItem> */}

        <NavigationMenuItem className="border border-input  bg-transparent hover:bg-accent hover:text-accent-foreground transparent-button">
          <Link href="https://wa.me/918977894645"  legacyBehavior passHref>
            <NavigationMenuTriggerra>

            <Video className="mr-4"/>

                Book online counselling
              
            </NavigationMenuTriggerra>
          </Link>
        </NavigationMenuItem>
        
       

        

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
