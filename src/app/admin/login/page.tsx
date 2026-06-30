import { Crown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <Crown className="h-10 w-10 text-gold-500 mx-auto mb-2" />
            <h1 className="font-heading text-2xl font-bold">Admin Login</h1>
            <p className="text-sm text-muted-foreground">QueenMassage Dashboard</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input type="email" placeholder="admin@queenmassage.id" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button variant="luxury" className="w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
