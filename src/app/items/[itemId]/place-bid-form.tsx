'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { createBidAction } from './actions'
import { Loader2 } from 'lucide-react'

export default function PlaceBidForm({ id }: { id: number }) {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <form
      onSubmit={async (e) => {
        setIsLoading(true)
        e.preventDefault()
        await createBidAction(id)
        setIsLoading(false)
      }}
    >
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          'Place a Bid'
        )}
      </Button>
    </form>
  )
}
