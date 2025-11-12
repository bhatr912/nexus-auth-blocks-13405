import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface AuthCardProps {
  children: ReactNode;
  logo?: string;
  title?: string;
}

export const AuthCard = ({ children, logo = "Able", title }: AuthCardProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--gradient-auth)' }}>
      <Card className="w-full max-w-md p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-1">{logo}</h1>
          {title && <p className="text-sm text-muted-foreground">{title}</p>}
        </div>
        {children}
      </Card>
    </div>
  );
};
