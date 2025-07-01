
import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=250&fit=crop',
    count: 25
  },
  {
    id: 'clothing',
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop',
    count: 40
  },
  {
    id: 'home',
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop',
    count: 18
  },
  {
    id: 'sports',
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
    count: 15
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life. Features premium sound quality and comfortable over-ear design.',
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'clothing',
    description: 'Comfortable 100% cotton t-shirt available in multiple colors and sizes. Soft, breathable fabric perfect for everyday wear.',
    rating: 4.2,
    reviews: 89
  },
  {
    id: '3',
    name: 'Smart Home Security Camera',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'electronics',
    description: '1080p HD security camera with night vision and mobile app control. Motion detection and cloud storage included.',
    rating: 4.7,
    reviews: 67
  },
  {
    id: '4',
    name: 'Yoga Mat Pro',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    category: 'sports',
    description: 'Non-slip yoga mat with excellent grip and cushioning for all yoga practices. Extra thick for comfort and durability.',
    rating: 4.3,
    reviews: 145
  },
  {
    id: '5',
    name: 'LED Desk Lamp',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    category: 'home',
    description: 'Adjustable LED desk lamp with touch control and USB charging port. Multiple brightness levels and color temperatures.',
    rating: 4.1,
    reviews: 92
  },
  {
    id: '6',
    name: 'Running Shoes',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'sports',
    description: 'Lightweight running shoes with advanced cushioning and breathable material. Perfect for daily runs and workouts.',
    rating: 4.6,
    reviews: 203
  },
  {
    id: '7',
    name: 'Ceramic Plant Pot',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
    category: 'home',
    description: 'Beautiful ceramic plant pot with drainage holes, perfect for indoor plants. Modern design complements any decor.',
    rating: 4.4,
    reviews: 56
  },
  {
    id: '8',
    name: 'Denim Jacket',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=400&h=400&fit=crop',
    category: 'clothing',
    description: 'Classic denim jacket with vintage wash, perfect for casual wear. Durable construction with timeless style.',
    rating: 4.0,
    reviews: 78
  },
  {
    id: '9',
    name: 'Smartphone Stand',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=400&fit=crop',
    category: 'electronics',
    description: 'Adjustable smartphone stand for desk use. Compatible with all phone sizes and viewing angles.',
    rating: 4.2,
    reviews: 34
  },
  {
    id: '10',
    name: 'Fitness Tracker',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop',
    category: 'sports',
    description: 'Water-resistant fitness tracker with heart rate monitor and sleep tracking. 7-day battery life.',
    rating: 4.4,
    reviews: 156
  },
  {
    id: '11',
    name: 'Kitchen Knife Set',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba8f3f5?w=400&h=400&fit=crop',
    category: 'home',
    description: 'Professional kitchen knife set with wooden block. Sharp, durable stainless steel blades.',
    rating: 4.6,
    reviews: 98
  },
  {
    id: '12',
    name: 'Casual Sneakers',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    category: 'clothing',
    description: 'Comfortable casual sneakers for everyday wear. Breathable fabric with cushioned sole.',
    rating: 4.3,
    reviews: 87
  }
];
