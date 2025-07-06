
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Trash2, Plus } from 'lucide-react';

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [vouchers, setVouchers] = useState([]);

  // Product form state
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    description: '',
    rating: '4.0',
    reviews: '0'
  });

  // Voucher form state
  const [voucherForm, setVoucherForm] = useState({
    code: '',
    discount: '',
    type: 'percentage',
    minAmount: '',
    maxUses: '',
    expiryDate: ''
  });

  useEffect(() => {
    if (!currentUser || currentUser.email !== 'rijoanmaruf@gmail.com') {
      navigate('/');
      return;
    }
    fetchProducts();
    fetchVouchers();
  }, [currentUser, navigate]);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchVouchers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'vouchers'));
      const vouchersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setVouchers(vouchersData);
    } catch (error) {
      console.error('Error fetching vouchers:', error);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'products'), {
        ...productForm,
        price: parseFloat(productForm.price),
        rating: parseFloat(productForm.rating),
        reviews: parseInt(productForm.reviews),
        createdAt: new Date()
      });
      
      toast({
        title: "Success",
        description: "Product added successfully!",
      });
      
      setProductForm({
        name: '',
        price: '',
        image: '',
        category: '',
        description: '',
        rating: '4.0',
        reviews: '0'
      });
      
      fetchProducts();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add product.",
        variant: "destructive",
      });
    }
  };

  const handleAddVoucher = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'vouchers'), {
        ...voucherForm,
        discount: parseFloat(voucherForm.discount),
        minAmount: parseFloat(voucherForm.minAmount) || 0,
        maxUses: parseInt(voucherForm.maxUses) || 0,
        currentUses: 0,
        expiryDate: new Date(voucherForm.expiryDate),
        createdAt: new Date()
      });
      
      toast({
        title: "Success",
        description: "Voucher added successfully!",
      });
      
      setVoucherForm({
        code: '',
        discount: '',
        type: 'percentage',
        minAmount: '',
        maxUses: '',
        expiryDate: ''
      });
      
      fetchVouchers();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add voucher.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteDoc(doc(db, 'products', productId));
      toast({
        title: "Success",
        description: "Product deleted successfully!",
      });
      fetchProducts();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete product.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteVoucher = async (voucherId) => {
    try {
      await deleteDoc(doc(db, 'vouchers', voucherId));
      toast({
        title: "Success",
        description: "Voucher deleted successfully!",
      });
      fetchVouchers();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete voucher.",
        variant: "destructive",
      });
    }
  };

  if (!currentUser || currentUser.email !== 'rijoanmaruf@gmail.com') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products">Products Management</TabsTrigger>
            <TabsTrigger value="vouchers">Vouchers Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Product
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      value={productForm.name}
                      onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={productForm.price}
                      onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      value={productForm.image}
                      onChange={(e) => setProductForm({...productForm, image: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select value={productForm.category} onValueChange={(value) => setProductForm({...productForm, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="home">Home & Garden</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={productForm.description}
                      onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <Input
                      id="rating"
                      type="number"
                      min="0"
                      max="5"
                      step="0.1"
                      value={productForm.rating}
                      onChange={(e) => setProductForm({...productForm, rating: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reviews">Number of Reviews</Label>
                    <Input
                      id="reviews"
                      type="number"
                      min="0"
                      value={productForm.reviews}
                      onChange={(e) => setProductForm({...productForm, reviews: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full">Add Product</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existing Products ({products.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 space-y-2">
                      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-600">${product.price}</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                        className="w-full"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vouchers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Voucher
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddVoucher} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="code">Voucher Code</Label>
                    <Input
                      id="code"
                      value={voucherForm.code}
                      onChange={(e) => setVoucherForm({...voucherForm, code: e.target.value.toUpperCase()})}
                      placeholder="SAVE20"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="discount">Discount Amount</Label>
                    <Input
                      id="discount"
                      type="number"
                      step="0.01"
                      value={voucherForm.discount}
                      onChange={(e) => setVoucherForm({...voucherForm, discount: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Discount Type</Label>
                    <Select value={voucherForm.type} onValueChange={(value) => setVoucherForm({...voucherForm, type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage (%)</SelectItem>
                        <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="minAmount">Minimum Order Amount</Label>
                    <Input
                      id="minAmount"
                      type="number"
                      step="0.01"
                      value={voucherForm.minAmount}
                      onChange={(e) => setVoucherForm({...voucherForm, minAmount: e.target.value})}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxUses">Maximum Uses</Label>
                    <Input
                      id="maxUses"
                      type="number"
                      value={voucherForm.maxUses}
                      onChange={(e) => setVoucherForm({...voucherForm, maxUses: e.target.value})}
                      placeholder="Unlimited"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      type="date"
                      value={voucherForm.expiryDate}
                      onChange={(e) => setVoucherForm({...voucherForm, expiryDate: e.target.value})}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full">Add Voucher</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existing Vouchers ({vouchers.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vouchers.map((voucher) => (
                    <div key={voucher.id} className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">{voucher.code}</h3>
                        <p className="text-sm text-gray-600">
                          {voucher.type === 'percentage' ? `${voucher.discount}% off` : `$${voucher.discount} off`}
                        </p>
                        <p className="text-xs text-gray-500">
                          Min: ${voucher.minAmount || 0} | Uses: {voucher.currentUses || 0}/{voucher.maxUses || '∞'}
                        </p>
                        <p className="text-xs text-gray-500">
                          Expires: {voucher.expiryDate?.toDate?.()?.toLocaleDateString() || 'N/A'}
                        </p>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteVoucher(voucher.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
