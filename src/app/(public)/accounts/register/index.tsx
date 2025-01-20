'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {Input} from '@/components/Input';
import Link from 'next/link';
import { redirectToLogin } from '@/constants/links';
import { GoogleLogin } from '@/components/GoogleLogin';
import { Separator } from '@/components/Separator';

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
              <Input
                htmlFor="name"
                id="name"
                type="text"
                placeholder="Ex: João da Silva"
                labelText="Nome completo"
              />
              <Input
                htmlFor="email"
                id="email"
                type="email"
                placeholder="joao@exemplo.com"
                labelText="Email"
              />
              <Input
                htmlFor="password"
                id="password"
                type="password"
                placeholder="****************"
                labelText="Senha"
              >
              </Input>

              <Button type="submit" className="w-full">
                Cadastrar
              </Button>
              <Separator text='Ou continue com'/>
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
