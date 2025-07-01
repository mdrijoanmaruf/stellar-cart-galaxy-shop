
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Successful!</h1>
          <p className="text-xl text-gray-600">Thank you for your purchase</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold mb-2">Order #12345</h2>
              <p className="text-gray-600">Your order has been confirmed and will be processed shortly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Package className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Processing</h3>
                <p className="text-sm text-gray-600">We're preparing your order</p>
              </div>
              <div className="text-center">
                <Truck className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Shipping</h3>
                <p className="text-sm text-gray-600">Your order will be shipped soon</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Delivered</h3>
                <p className="text-sm text-gray-600">Expected delivery in 3-5 days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-gray-600">
            A confirmation email has been sent to your email address with order details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/orders">View Orders</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
