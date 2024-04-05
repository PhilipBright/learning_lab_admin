// import React from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { BarChart4, Clock, Delete, DollarSign, Pencil, Recycle, Star, TicketPlus, Trash2, Users } from 'lucide-react'
// import Image from 'next/image'
// import course2 from '@/public/images/course2.jpeg'
// import TotalCourses from '@/components/blocks/TotalCourses'
// import BreadCrumb from '@/components/blocks/BreadCrumb'

// const CourseTable = () => {
//   return (
//     <main className='gap-4 p-4 md:gap-8 '>
//   <h1 className=' text-4xl font-bold text-black pb-8 '>Courses</h1>
//   <BreadCrumb source='Admin' destination='Courses'/>
//       <div className='flex pt-6'>
//       <Card className='w-[100%]'>
//             <CardHeader className="flex flex-row items-center space-y-0 pb-6">
//             <Image src={course2} alt='Course Image' className=' w-[50%] mr-8 rounded-xl' />

//              <div>
//               <h1 className=' text-3xl font-bold pb-4'>Introduction to Programming</h1>
//               <p className='text-muted-foreground w-[30rem] text-justify pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia enim fuga dolor autem Officia enim fuga dolor autem Officia enim fuga dolor autem Officia enim fuga dolor autem Officia enim fuga dolor autem Officia enim fuga dolor autem </p>
//               <div className='flex items-center   my-2 pt-1  text-white'>
//                 <div className='bg-[#007bff] flex p-2 items-center rounded-lg w-50 mr-4'>
//                 <h3 className=' pr-2'>By Philip Bright</h3>
//                 <Star fill='#facc14' className='h-4 w-4 text-yellow-400' />
//                 <p>4.8 rating</p>
//                 </div>
//                <div>
//                <h1 className='text-lg bg-red-500 p-1 rounded-lg text-white font-medium'>$360</h1>
//                </div>
               
//               </div>
//               <div className='flex items-center mt-4 '>
//                 <div className='flex items-center mr-3'>
//                 <Clock className='h-5 w-5 text-blue-400 mr-2' />
//                 <span className=''>40 Minutes</span>
//                 </div>
//                 <div className='flex items-center mr-3'>
//                 <BarChart4 className='h-5 w-5 text-blue-400 mr-2' />
//                 <span className=''>Beginner</span>
                
//                 </div>
//                 <div className='flex items-center'>
//                <TicketPlus className='h-5 w-5 text-blue-400 mr-2' />
//                 <span className=''>Premium</span>
                
//                 </div>

               
//               </div>
//              </div>
//              <div>
             
//              </div>
           
//             </CardHeader>
           
//           </Card>
//           <div>
//             <div className='border border-gray-300 p-2 rounded-lg cursor-pointer'>
//             <Pencil className='h-6 w-6 text-blue-400 ' />
//             </div>
//             <div className='border border-gray-300 rounded-lg p-2'>
//           <Trash2 className='h-6 w-6 text-red-400 ' />
//             </div>
            
//           </div>
          
//       </div>
     
     
//     </main>
    
//   )
// }

// export default CourseTable


"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Student } from "@/constant"
import { userData }from "@/constant/data"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import BreadCrumb from '@/components/blocks/BreadCrumb'
import UserDialog from "@/components/dialogs/UserDialog"



export const columns: ColumnDef<Student>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("username")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "enrollmentId",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Enrollment
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("enrollmentId")}</div>,
  },
  {
    accessorKey: "subscription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Subscription
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className=" w-32 h-6 rounded-lg text-center border border-blue-300">{row.getValue("subscription")}</div>,
  },
  {
    accessorKey: "registerDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Register Date
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("registerDate")}</div>,
  },
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const student = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(student.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const CourseTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: userData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full p-4">
      <h1 className=' text-4xl font-bold'>Student Data</h1>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="flex items-center">
          
          <UserDialog/>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
export default CourseTable