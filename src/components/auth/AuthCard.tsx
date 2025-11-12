import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface AuthCardProps {
  children: ReactNode;
  logo?: string;
  title?: string;
}

export const AuthCard = ({ children, logo = "Able", title }: AuthCardProps) => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" 
      style={{ 
        background: 'var(--gradient-auth)',
        backgroundImage: 'var(--auth-pattern)',
        backgroundSize: '20px 20px'
      }}
    >
      {/* Bubble decorations */}
      <div className="bubble bubble-1" />
      <div className="bubble bubble-2" />
      <div className="bubble bubble-3" />
      <div className="bubble bubble-4" />
      <div className="bubble bubble-5" />
      <div className="bubble bubble-6" />
      
      <Card className="w-full max-w-md p-8 shadow-xl relative z-10">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-primary mb-1">{logo}</h1>
          {title && <p className="text-sm text-muted-foreground">{title}</p>}
        </div>
        {children}
      </Card>
    </div>
  );
};
