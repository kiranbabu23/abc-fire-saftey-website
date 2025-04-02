import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Calendar from "@/components/booking/Calendar";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

// Time slot component
const TimeSlot = ({ 
  value, 
  label, 
  selected, 
  onSelect 
}: { 
  value: string; 
  label: string; 
  selected: boolean; 
  onSelect: (value: string) => void 
}) => (
  <div className="time-slot">
    <label 
      className={`block border rounded-md py-2 px-3 text-center cursor-pointer hover:border-primary transition-all ${selected ? 'border-primary bg-primary bg-opacity-5' : 'border-neutral-200'}`}
      onClick={() => onSelect(value)}
    >
      {label}
    </label>
  </div>
);

// Form schema for booking
const bookingFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your address" }),
  city: z.string().min(2, { message: "Please enter your city" }),
  state: z.string().min(2, { message: "Please enter your state" }),
  zipCode: z.string().min(5, { message: "Please enter a valid ZIP code" }),
  serviceType: z.string({ required_error: "Please select a service type" }),
  propertyType: z.string({ required_error: "Please select a property type" }),
  date: z.string({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
  notes: z.string().optional(),
  terms: z.boolean().refine(val => val === true, { message: "You must agree to the terms" })
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const BookingForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Setup form with default values
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      serviceType: "",
      propertyType: "",
      date: "",
      time: "",
      notes: "",
      terms: false
    }
  });

  const bookingMutation = useMutation({
    mutationFn: (data: BookingFormValues) => {
      // Remove the terms field as it's not needed in the API
      const { terms, ...bookingData } = data;
      return apiRequest("POST", "/api/bookings", bookingData);
    },
    onSuccess: () => {
      setShowSuccess(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: BookingFormValues) => {
    bookingMutation.mutate(data);
  };

  // Handle date selection
  const handleDateSelect = (dateStr: string) => {
    setSelectedDate(dateStr);
    form.setValue("date", dateStr);
  };

  // Handle time selection
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    form.setValue("time", time);
  };

  // Move to next step
  const nextStep = () => {
    // Validate step 1 fields
    if (currentStep === 1) {
      const serviceType = form.getValues("serviceType");
      const propertyType = form.getValues("propertyType");
      
      if (!serviceType || !propertyType) {
        toast({
          title: "Missing Information",
          description: "Please select a service type and property type to continue.",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Validate step 2 fields
    if (currentStep === 2) {
      const date = form.getValues("date");
      const time = form.getValues("time");
      
      if (!date || !time) {
        toast({
          title: "Missing Information",
          description: "Please select a date and time to continue.",
          variant: "destructive",
        });
        return;
      }
    }
    
    setCurrentStep(currentStep + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Service options
  const serviceOptions = [
    { id: "extinguisher", label: "Fire Extinguisher Inspection", description: "Annual inspection and certification of fire extinguishers" },
    { id: "risk", label: "Fire Risk Assessment", description: "Comprehensive evaluation of fire hazards and safety measures" },
    { id: "equipment", label: "Safety Equipment Installation", description: "Installation of new fire extinguishers and safety equipment" },
    { id: "maintenance", label: "Maintenance Service", description: "Repair and maintenance of existing fire safety equipment" }
  ];

  // Morning time slots
  const morningSlots = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" }
  ];

  // Afternoon time slots
  const afternoonSlots = [
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" }
  ];

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatDisplayTime = (timeStr: string) => {
    if (!timeStr) return "";
    // Create a date object at Jan 1, 2023 with the given time
    const date = new Date(`2023-01-01T${timeStr}`);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-500 mb-6">Step 1: Select a Service</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceOptions.map((service) => (
                <div 
                  key={service.id}
                  className={`border rounded-md p-4 cursor-pointer hover:border-primary transition-all ${form.watch("serviceType") === service.id ? 'border-primary' : 'border-neutral-200'}`}
                  onClick={() => form.setValue("serviceType", service.id)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 border border-neutral-300 rounded-full flex items-center justify-center">
                        {form.watch("serviceType") === service.id && (
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                        )}
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-neutral-500">{service.label}</h3>
                      <p className="text-sm text-neutral-400 mt-1">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-neutral-500 mb-2">Property Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full border border-neutral-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="institutional">Institutional (School, Hospital, etc.)</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="office">Office Building</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="mt-6">
              <Button 
                type="button" 
                onClick={nextStep}
                className="bg-primary text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-red-700 transition-all"
              >
                Continue to Next Step
              </Button>
            </div>
          </div>
        )}
        
        {/* Step 2: Date & Time Selection */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-500 mb-6">Step 2: Choose a Date & Time</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Calendar Picker */}
              <div>
                <h3 className="font-semibold text-neutral-500 mb-4">Select a Date</h3>
                <Calendar 
                  selectedDate={selectedDate}
                  onDateSelect={handleDateSelect}
                />
              </div>
              
              {/* Time Slot Selection */}
              <div>
                <h3 className="font-semibold text-neutral-500 mb-4">Select a Time</h3>
                
                <div className="space-y-3">
                  {/* Morning Slots */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-400 mb-2">Morning</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {morningSlots.map((slot) => (
                        <TimeSlot
                          key={slot.value}
                          value={slot.value}
                          label={slot.label}
                          selected={selectedTime === slot.value}
                          onSelect={handleTimeSelect}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Afternoon Slots */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-400 mb-2">Afternoon</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {afternoonSlots.map((slot) => (
                        <TimeSlot
                          key={slot.value}
                          value={slot.value}
                          label={slot.label}
                          selected={selectedTime === slot.value}
                          onSelect={handleTimeSelect}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <Button 
                type="button" 
                onClick={prevStep}
                variant="outline"
                className="bg-white border border-neutral-200 text-neutral-500 font-medium py-2 px-6 rounded-md shadow-sm hover:bg-neutral-50 transition-all"
              >
                Previous Step
              </Button>
              <Button 
                type="button" 
                onClick={nextStep}
                className="bg-primary text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-red-700 transition-all"
              >
                Continue to Next Step
              </Button>
            </div>
          </div>
        )}
        
        {/* Step 3: Contact Information */}
        {currentStep === 3 && !showSuccess && (
          <div>
            <h2 className="text-2xl font-bold text-neutral-500 mb-6">Step 3: Your Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-400">First Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="First Name" 
                        className="w-full border border-neutral-200 rounded-md px-4 py-2" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-400">Last Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Last Name" 
                        className="w-full border border-neutral-200 rounded-md px-4 py-2" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="mt-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-400">Email Address *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Email Address" 
                        className="w-full border border-neutral-200 rounded-md px-4 py-2" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="mt-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-400">Phone Number *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Phone Number" 
                        className="w-full border border-neutral-200 rounded-md px-4 py-2" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="mt-6">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-400">Service Address *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Street Address" 
                        className="w-full border border-neutral-200 rounded-md px-4 py-2 mb-2" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="City" 
                          className="w-full border border-neutral-200 rounded-md px-4 py-2" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="State" 
                          className="w-full border border-neutral-200 rounded-md px-4 py-2" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="ZIP Code" 
                          className="w-full border border-neutral-200 rounded-md px-4 py-2" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-400">Additional Notes</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide any specific details about your service request"
                        className="w-full border border-neutral-200 rounded-md px-4 py-2" 
                        rows={3}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="mt-6">
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-neutral-400">
                        I agree to the terms of service and cancellation policy. I understand that someone must be present during the scheduled appointment time. *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="mt-6 flex space-x-4">
              <Button 
                type="button" 
                onClick={prevStep}
                variant="outline"
                className="bg-white border border-neutral-200 text-neutral-500 font-medium py-2 px-6 rounded-md shadow-sm hover:bg-neutral-50 transition-all"
              >
                Previous Step
              </Button>
              <Button 
                type="submit"
                disabled={bookingMutation.isPending}
                className="bg-primary text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-red-700 transition-all"
              >
                {bookingMutation.isPending ? "Processing..." : "Confirm Booking"}
              </Button>
            </div>
          </div>
        )}
        
        {/* Success Message */}
        {showSuccess && (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center bg-green-100 w-20 h-20 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-neutral-500 mb-4">Booking Confirmed!</h2>
            <p className="text-neutral-400 mb-6">
              Your inspection has been scheduled for{" "}
              <span className="font-semibold">
                {formatDisplayDate(selectedDate)}
              </span>{" "}
              at{" "}
              <span className="font-semibold">
                {formatDisplayTime(selectedTime)}
              </span>.
            </p>
            <p className="text-neutral-400 mb-8">
              We've sent a confirmation email to{" "}
              <span className="font-semibold">{form.getValues("email")}</span>{" "}
              with all the details.
            </p>
            <div>
              <Link href="/">
                <a className="inline-block bg-primary text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-red-700 transition-all">
                  Return to Home
                </a>
              </Link>
            </div>
          </div>
        )}
      </form>
    </Form>
  );
};

export default BookingForm;
