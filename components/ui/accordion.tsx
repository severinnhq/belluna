import React from 'react';

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
}
export function Accordion({ children }: AccordionProps) {
  return <div className="space-y-4">{children}</div>;
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}
export function AccordionItem({ children }: AccordionItemProps) {
  return <div className="border border-gray-200 rounded-lg">{children}</div>;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
}
export function AccordionTrigger({ children }: AccordionTriggerProps) {
  return (
    <button className="w-full text-left p-4 font-medium flex justify-between items-center">
      {children}
      <span>▼</span>
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
}
export function AccordionContent({ children }: AccordionContentProps) {
  return <div className="px-4 pb-4 text-gray-700">{children}</div>;
}