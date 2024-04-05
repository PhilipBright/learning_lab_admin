import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'

const Teacher = () => {
  return (
    <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Teachers</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
  )
}

export default Teacher
