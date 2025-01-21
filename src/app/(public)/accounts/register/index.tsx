'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/Input';
import Link from 'next/link';
import { redirectToLogin } from '@/constants/links';
import { GoogleLogin } from '@/components/GoogleLogin';
import { Separator } from '@/components/Separator';
import { useActionState } from 'react';
import { signup } from '@/app/actions/auth';

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [state, action, pending] = useActionState(signup, undefined);
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Registrar-se</CardTitle>
          <CardDescription>
            Cadastra-se para cadastrar informações do seu estabelecimento.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="flex flex-col gap-6">
              <Input
                name="name"
                htmlFor="name"
                id="name"
                type="text"
                placeholder="joao@exemplo.com"
                labelText="Nome"
              />
              {state?.errors?.email && <p>{state.errors.name}</p>}
              <Input
                name="email"
                htmlFor="email"
                id="email"
                type="email"
                placeholder="joao@exemplo.com"
                labelText="Email"
              />
              {state?.errors?.email && <p>{state.errors.email}</p>}
              <Input
                name="password"
                htmlFor="password"
                id="password"
                type="password"
                placeholder="****************"
                labelText="Senha"
              />
              {state?.errors?.password && (
                <div>
                  <p>Password must:</p>
                  <ul>
                    {state.errors.password.map((error) => (
                      <li key={error}>- {error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <Button disabled={pending} type="submit" className="w-full">
                Cadastrar
              </Button>
              <Separator text="Ou continue com" />
              <GoogleLogin />
            </div>
            <div className="mt-4 text-center text-sm">
              Tem uma conta?{' '}
              <Link
                href={redirectToLogin}
                className="underline underline-offset-4"
              >
                Conecte-se
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
