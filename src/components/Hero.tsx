
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Amazing Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Shop the latest trends with unbeatable prices and fast delivery
            </p>
            <div className="flex items-center space-x-4 text-lg">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 mr-1" />
                <span>10k+ Happy Customers</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link to="/products" className="flex items-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link to="/categories">
                  Browse Categories
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=150&fit=crop" 
                    alt="Wireless Headphones" 
                    className="w-full h-32 object-cover rounded mb-4" 
                  />
                  <h3 className="font-semibold">Electronics</h3>
                  <p className="text-sm text-gray-200">Latest gadgets</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=150&fit=crop" 
                    alt="Fashion T-Shirt" 
                    className="w-full h-32 object-cover rounded mb-4" 
                  />
                  <h3 className="font-semibold">Fashion</h3>
                  <p className="text-sm text-gray-200">Trendy styles</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop" 
                    alt="LED Desk Lamp" 
                    className="w-full h-32 object-cover rounded mb-4" 
                  />
                  <h3 className="font-semibold">Home</h3>
                  <p className="text-sm text-gray-200">Cozy living</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=150&fit=crop" 
                    alt="Running Shoes" 
                    className="w-full h-32 object-cover rounded mb-4" 
                  />
                  <h3 className="font-semibold">Sports</h3>
                  <p className="text-sm text-gray-200">Active lifestyle</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold animate-bounce">
              50% OFF
            </div>
            <div className="absolute bottom-4 -left-4 bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
              Free Shipping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
