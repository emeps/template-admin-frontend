'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { redirectToLogin } from '@/constants/links';
import { GoogleLogin } from '@/components/GoogleLogin';

export function RegisterForm({
                               className, ...props
                             }: React.ComponentPropsWithoutRef<'div'>) {
  return (<div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Registrar-se</CardTitle>
          <CardDescription>
            Cadastra-se para cadastrar informações do seu estabelecimento.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ex: João da Silva"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="me@exemplo.com"
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input id="password" type="password" placeholder={'****************'} />
              </div>
              <Button type="submit" className="w-full">
                Cadastrar
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Ou continue com
                  </span>
              </div>
              <GoogleLogin/>
            </div>
            <div className="mt-4 text-center text-sm">
              Tem uma conta?{' '}
              <Link href={redirectToLogin} className="underline underline-offset-4">
                Conecte-se
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>);
}
