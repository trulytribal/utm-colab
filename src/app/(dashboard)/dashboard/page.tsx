import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import React from 'react';

export default function DashboardPage() {
  return (
    <div className="w-full px-6">
      <Card className="border-none drop-shadow-sm bg-secondary">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Dashboard Overview Page
          </CardTitle>
          <Button>
            {' '}
            <Plus className="size-4 mr-2" /> Add New
          </Button>
        </CardHeader>
        <CardContent>
          <div>This si the content</div>
        </CardContent>
      </Card>
    </div>
  );
}
