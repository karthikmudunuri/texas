'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectDemo } from "./select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border border-input bg-transparent hover:bg-accent hover:text-accent-foreground">Enquire now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-center">Enquiry Form</DialogTitle>
          <DialogDescription className="text-center">
           Fill your details and we will get back to you
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Email" className="text-right">
              Email
            </Label>
            <Input
              id="Email"
              type="email"
              placeholder="Enter your email"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Mobile" className="text-right">
              Mobile
            </Label>
            <Input
              id="Mobile"
              type="tel"
              placeholder="Enter your mobile number"    
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Destination" className="text-right whitespace-nowrap">
              Prefered destination
            </Label>
            <SelectDemo/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="comments" className="text-right">
              Comments
            </Label>
            <Textarea className="w-[425px]" placeholder="Type your message here." />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <div className="flex items-center gap-2 space-x-2 ml-32">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="whitespace-nowrap">Accept terms and conditions</Label>
      </div>
          </div>
         
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DialogDemousa() {
    return (
      <Dialog>
        <Button className="border z-10  mr-10 border-input bg-transparent hover:bg-accent hover:text-accent-foreground">
          <a href="/contact" className="no-underline"> Contact us</a>
         
          </Button>

        <DialogTrigger asChild>
          <Button className="border z-10 border-input bg-transparent hover:bg-accent hover:text-accent-foreground">Enquire now</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="text-center">Enquiry Form</DialogTitle>
            <DialogDescription className="text-center">
             Fill your details and we will get back to you
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Email" className="text-right">
                Email
              </Label>
              <Input
                id="Email"
                type="email"
                placeholder="Enter your email"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Mobile" className="text-right">
                Mobile
              </Label>
              <Input
                id="Mobile"
                type="tel"
                placeholder="Enter your mobile number"    
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Destination" className="text-right whitespace-nowrap">
                Prefered destination
              </Label>
              <SelectDemo/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="comments" className="text-right">
                Comments
              </Label>
              <Textarea className="w-[425px]" placeholder="Type your message here." />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
            <div className="flex items-center gap-2 space-x-2 ml-32">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="whitespace-nowrap">Accept terms and conditions</Label>
        </div>
            </div>
           
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
