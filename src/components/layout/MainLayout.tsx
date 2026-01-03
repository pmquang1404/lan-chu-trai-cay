'use client';

import { useState, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart, { CartItem } from '../cart/Cart';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Demo data - remove in production
    {
      id: 1,
      name: 'Táo Fuji Nhật Bản',
      price: 120000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400',
    },
    {
      id: 2,
      name: 'Nho Mỹ Đỏ',
      price: 250000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?w=400',
    },
  ]);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
      <Header onCartToggle={handleCartToggle} cartItemCount={totalCartItems} />

      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
