import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-5xl items-center justify-center font-mono text-2xl lg:flex">
        UTM Colab
      </div>
      <div>
        a collaborative utm tool for teams to build utm parameters and track
        their link performance from GA4
      </div>
      <div className="mt-4 flex flex-row items-center justify center space-x-4">
        <Button>Get Started</Button>
        <Button>Sign In</Button>
      </div>
    </main>
  );
}
