'use client';

import { Card } from '@/components/ui/card'
import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function Home() {
  const {data} = useSession();
  return (
    <div>
      <Card>
        <h1>{data?.user?.name}</h1>
      </Card>
    </div>
  )
}
