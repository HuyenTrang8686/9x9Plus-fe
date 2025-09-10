// app/error.tsx
'use client';

import DialogError from '@/components/DialogError';
import RootTemplate from '@/templates/RootTemplate';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <RootTemplate>
      <div className="h-screen">
        <DialogError des={error.message} title="Lỗi" isOpen={true} onClick={() => reset()} />
      </div>
    </RootTemplate>
  );
}
