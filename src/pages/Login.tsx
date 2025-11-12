import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthCard } from "@/components/auth/AuthCard";
import { ProviderButtons } from "@/components/auth/ProviderButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back!"
    });
    navigate("/");
  };
  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} Login`,
      description: "Social login functionality coming soon!"
    });
  };
  return <AuthCard logo="Able" title="PRO">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Login</h2>
        <Link to="/register" className="text-sm text-primary hover:underline">
          Don't have an account?
        </Link>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs text-muted-foreground">
            Email Address
          </Label>
          <Input id="email" type="email" placeholder="info@phoenixcoded.co" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-xs text-muted-foreground">
            Password
          </Label>
          <Input id="password" type="password" placeholder="••••••" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>

        

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>

      <ProviderButtons onProviderClick={handleSocialLogin} />
    </AuthCard>;
};
export default Login;