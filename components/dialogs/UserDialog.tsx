import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Plus } from 'lucide-react'

const UserDialog = () => {
  return (

        <Dialog>
        <DialogTrigger>
        <div className="flex items-center border rounded-lg px-3 py-2 bg-primary text-white mr-4 text-sm">
        <Plus className=" border rounded-[50%] w-4 h-4 mr-2" />
            New User
            </div>
            </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
      
   
  )
}

export default UserDialog
