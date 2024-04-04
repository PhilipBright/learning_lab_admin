import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Chartbar } from '../chart/Chartbar'


const Analysis = () => {
  return (
  <>
              <Card className='col-span-1 md:col-span-4'>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Chartbar />
                </CardContent>
              </Card>
              
    </>
  )
}

export default Analysis
