
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive collection of products across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group block"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group-hover:border-primary">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-foreground transition-colors">
                        {category.name}
                      </h3>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {category.count} products
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      Discover amazing {category.name.toLowerCase()} products with great deals and quality
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Category Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Most Popular Category
            </h2>
          </div>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center text-white space-y-6">
                <h3 className="text-4xl font-bold">Electronics</h3>
                <p className="text-xl opacity-90">
                  From cutting-edge smartphones to smart home devices, discover the latest in technology
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                    25+ Products
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                    Best Sellers
                  </Badge>
                </div>
                <Link
                  to="/category/electronics"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-fit"
                >
                  Shop Electronics
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
                  alt="Electronics 1"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
                  alt="Electronics 2"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=300&h=200&fit=crop"
                  alt="Electronics 3"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=200&fit=crop"
                  alt="Electronics 4"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
