import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthCard } from "@/components/auth/AuthCard";
import { ProviderButtons } from "@/components/auth/ProviderButtons";
import { PasswordStrengthIndicator } from "@/components/auth/PasswordStrengthIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account Created",
      description: "Welcome to Able Pro!"
    });
    navigate("/login");
  };
  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} Sign Up`,
      description: "Social sign up functionality coming soon!"
    });
  };
  return <AuthCard logo="Able" title="PRO">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Sign up</h2>
        <Link to="/login" className="text-sm text-primary hover:underline">
          Already have an account?
        </Link>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Input id="firstName" type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Input id="lastName" type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
          </div>
        </div>

        <div className="space-y-2">
          <Input id="company" type="text" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Input id="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>

        <div className="space-y-2">
          <Input id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <PasswordStrengthIndicator password={password} />
        </div>

        

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>

      <ProviderButtons onProviderClick={handleSocialLogin} />
    </AuthCard>;
};
export default Register;