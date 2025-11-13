import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Products() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Products</h1>
        <p className="text-muted-foreground mt-2">
          Manage your product inventory
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is the products page. Here you can view, add, edit, and manage all your products.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
