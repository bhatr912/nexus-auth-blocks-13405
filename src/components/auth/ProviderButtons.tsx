import { Button } from "@/components/ui/button";
interface ProviderButtonsProps {
  onProviderClick?: (provider: string) => void;
}
export const ProviderButtons = ({
  onProviderClick
}: ProviderButtonsProps) => {
  const providers = [{
    name: "Google",
    icon: "🔍"
  }, {
    name: "Auth0",
    icon: "🔐"
  }, {
    name: "Cognito",
    icon: "🔒"
  }];
  return <div className="flex gap-2 justify-center pt-4">
      {providers.map(provider => (
        <Button
          key={provider.name}
          variant="outline"
          size="sm"
          onClick={() => onProviderClick?.(provider.name)}
          className="flex-1"
        >
          <span className="mr-2">{provider.icon}</span>
          {provider.name}
        </Button>
      ))}
    </div>;
};