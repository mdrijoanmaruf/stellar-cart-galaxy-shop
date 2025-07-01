
import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: '/api/placeholder/300/200',
    count: 25
  },
  {
    id: 'clothing',
    name: 'Clothing',
    image: '/api/placeholder/300/200',
    count: 40
  },
  {
    id: 'home',
    name: 'Home & Garden',
    image: '/api/placeholder/300/200',
    count: 18
  },
  {
    id: 'sports',
    name: 'Sports',
    image: '/api/placeholder/300/200',
    count: 15
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    image: '/api/placeholder/300/300',
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    image: '/api/placeholder/300/300',
    category: 'clothing',
    description: 'Comfortable 100% cotton t-shirt available in multiple colors and sizes.',
    rating: 4.2,
    reviews: 89
  },
  {
    id: '3',
    name: 'Smart Home Security Camera',
    price: 149.99,
    image: '/api/placeholder/300/300',
    category: 'electronics',
    description: '1080p HD security camera with night vision and mobile app control.',
    rating: 4.7,
    reviews: 67
  },
  {
    id: '4',
    name: 'Yoga Mat Pro',
    price: 39.99,
    image: '/api/placeholder/300/300',
    category: 'sports',
    description: 'Non-slip yoga mat with excellent grip and cushioning for all yoga practices.',
    rating: 4.3,
    reviews: 145
  },
  {
    id: '5',
    name: 'LED Desk Lamp',
    price: 24.99,
    image: '/api/placeholder/300/300',
    category: 'home',
    description: 'Adjustable LED desk lamp with touch control and USB charging port.',
    rating: 4.1,
    reviews: 92
  },
  {
    id: '6',
    name: 'Running Shoes',
    price: 89.99,
    image: '/api/placeholder/300/300',
    category: 'sports',
    description: 'Lightweight running shoes with advanced cushioning and breathable material.',
    rating: 4.6,
    reviews: 203
  },
  {
    id: '7',
    name: 'Ceramic Plant Pot',
    price: 19.99,
    image: '/api/placeholder/300/300',
    category: 'home',
    description: 'Beautiful ceramic plant pot with drainage holes, perfect for indoor plants.',
    rating: 4.4,
    reviews: 56
  },
  {
    id: '8',
    name: 'Denim Jacket',
    price: 59.99,
    image: '/api/placeholder/300/300',
    category: 'clothing',
    description: 'Classic denim jacket with vintage wash, perfect for casual wear.',
    rating: 4.0,
    reviews: 78
  }
];
