import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CircleCheck, CircleCheckBig } from "lucide-react"
import { subscriptionData } from "@/constant/data"
import { Subscriptions } from "@/constant"
import BreadCrumb from "@/components/blocks/BreadCrumb"

const SubscriptionTable = () => {
    return (
      <div className="w-full p-4">
      <h1 className=' text-4xl font-bold pb-4'>Instructor Data</h1>
      <BreadCrumb source="Admin" destination="Subscription" />
      <div className="flex justify-between pt-8">
       
        {subscriptionData.map((data: Subscriptions, index) => {
          return (
            <Card className="w-[350px]" key={index}>
            <CardHeader>
              <CardTitle className="text-3xl text-primary pb-4">{data.type}</CardTitle>
              <CardTitle className="text-5xl flex items-end pb-2 ">${data.price} <span className="text-2xl">/Month</span></CardTitle>
              <CardDescription>Unlock your potential with our range of plans, designed to fit your learning journey</CardDescription>
            </CardHeader>
            <CardContent>
              
                <div className="grid w-full items-center gap-4">
                 {data.benefits.map((benefit, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <CircleCheckBig className="text-primary" />
                        <p>{benefit.benefit}</p>
                      </div>
                    )
                 })}
                 
                </div>
       
            </CardContent>
           
          </Card>
          )
        })}
      </div>
    </div>
    )
}
export default SubscriptionTable