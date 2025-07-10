import React from 'react';
interface CardProps {
  children: React.ReactNode;
}
export function Card({ children }: CardProps) {
  return <div className="bg-white rounded-2xl shadow p-6">{children}</div>;
}
interface CardHeaderProps { title: string; }
export function CardHeader({ title }: CardHeaderProps) {
  return <h3 className="text-xl font-semibold mb-2">{title}</h3>;
}
export function CardContent({ children }: CardProps) {
  return <div className="text-gray-600">{children}</div>;
}