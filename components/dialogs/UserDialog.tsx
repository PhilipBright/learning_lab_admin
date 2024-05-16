import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Plus } from 'lucide-react'
import { Input } from '../ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem } from '../ui/select';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { Label } from '../ui/label';

const UserDialog = () => {
    const [formData, setFormData] = useState({
        id: '',
        image: '',
        title: '',
        description: '',
        category: '',
        type: '',
        duration: '',
        level: '',
        date: ''
      });
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
    
      };
 
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
            <DialogTitle>Add Course</DialogTitle>
           
            </DialogHeader>
          
            <form onSubmit={handleSubmit}>
            <Label htmlFor="id-input">Date</Label>      
          <Input name="id" value={formData.id} onChange={handleChange} placeholder="ID" required />
          <Label htmlFor="id-input">Image</Label>  
          <Input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
          <Label htmlFor="id-input">Image</Label> 
          <Input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
          <Label htmlFor="id-input">Image</Label> 
          <Input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
          <Label htmlFor="id-input">Image</Label> 
          <Input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
          <Label htmlFor="id-input">Image</Label> 
          <Input name="type" value={formData.type} onChange={handleChange} placeholder="Type" required />
          <Label htmlFor="id-input">Image</Label> 
          <Input type="number" name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration (in minutes)" required />
          <Select>
          <SelectContent position="popper"> 
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
            </Select>

          <Input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Date" required />
          <Button type="submit">Submit</Button>
        </form>


        </DialogContent>
        </Dialog>
      
   
  )
}

export default UserDialog
