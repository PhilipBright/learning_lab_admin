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

const SubscriptionTable = () => {
    return (
      <div>
        {subscriptionData.map((data: Subscriptions, index) => {
          return (
            <Card className="w-[350px]" key={index}>
            <CardHeader>
              <CardTitle className="text-3xl text-primary">{data.type}</CardTitle>
              <CardTitle className="text-5xl flex items-end">${data.price} <span className="text-2xl">/Month</span></CardTitle>
              {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
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
    )
}
export default SubscriptionTable