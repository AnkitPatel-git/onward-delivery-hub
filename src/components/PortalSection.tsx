
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, LogIn } from "lucide-react";

const PortalSection = () => {
  return (
    <section id="portals" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Access Your <span className="text-brand-orange">Portal</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Manage your shipments and operations with our dedicated customer and admin portals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="customer" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="customer" className="text-lg py-3">
                <User className="mr-2 h-4 w-4" />
                Customer Portal
              </TabsTrigger>
              <TabsTrigger value="admin" className="text-lg py-3">
                <Package className="mr-2 h-4 w-4" />
                Admin Portal
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="customer">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-brand-orange p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Customer Portal</h3>
                    <p className="mb-6">
                      Access your customer dashboard to manage shipments, track deliveries,
                      and view your order history.
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <span className="text-white font-medium text-sm">✓</span>
                        </div>
                        <span>Track all your shipments in real-time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <span className="text-white font-medium text-sm">✓</span>
                        </div>
                        <span>Schedule new pickups and deliveries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <span className="text-white font-medium text-sm">✓</span>
                        </div>
                        <span>Access billing information and invoices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <span className="text-white font-medium text-sm">✓</span>
                        </div>
                        <span>Generate reports and analytics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-6">Sign In</h4>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="customer-email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input id="customer-email" type="email" placeholder="Your email address" />
                      </div>
                      
                      <div>
                        <label htmlFor="customer-password" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <Input id="customer-password" type="password" placeholder="Your password" />
                      </div>
                      
                      <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign In
                      </Button>
                      
                      <div className="text-center">
                        <a href="#" className="text-sm text-brand-orange hover:underline">
                          Forgot password?
                        </a>
                        <p className="text-sm text-brand-gray mt-2">
                          Don't have an account? 
                          <a href="#" className="text-brand-orange hover:underline ml-1">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="admin">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-brand-dark p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Admin Portal</h3>
                    <p className="mb-6">
                      Access the operations dashboard to manage fleets, schedule deliveries,
                      and oversee all logistics operations.
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <span className="text-white font-medium text-sm">✓</span>
                        </div>
                        <span>Comprehensive fleet management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <span className="text-white font-medium text-sm">✓</span>
                        </div>
                        <span>Route optimization and scheduling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <span className="text-white font-medium text-sm">✓</span>
                        </div>
                        <span>Real-time analytics and reporting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <span className="text-white font-medium text-sm">✓</span>
                        </div>
                        <span>Inventory and warehouse management</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-6">Admin Login</h4>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="admin-username" className="block text-sm font-medium text-gray-700 mb-1">
                          Username
                        </label>
                        <Input id="admin-username" type="text" placeholder="Admin username" />
                      </div>
                      
                      <div>
                        <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <Input id="admin-password" type="password" placeholder="Admin password" />
                      </div>
                      
                      <Button className="w-full bg-brand-dark hover:bg-brand-dark/90 text-white">
                        <LogIn className="mr-2 h-4 w-4" />
                        Admin Login
                      </Button>
                      
                      <div className="text-center">
                        <a href="#" className="text-sm text-brand-dark hover:underline">
                          Forgot admin credentials?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PortalSection;
