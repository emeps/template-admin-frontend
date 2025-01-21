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
import { redirectToRegister } from '@/constants/links';
import { GoogleLogin } from '@/components/GoogleLogin';
import { Separator } from '@/components/Separator';
import { login } from '@/app/actions/auth';
import { useActionState } from 'react';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Entrar</CardTitle>
          <CardDescription>
            Entre com seu email e senha para acessar a plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="flex flex-col gap-6">
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
              >
                <Link
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  href={'#'}
                >
                  Esquece a senha?
                </Link>
              </Input>
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
                Entrar
              </Button>
              <Separator text="Ou continue com" />
              <GoogleLogin />
            </div>
            <div className="mt-4 text-center text-sm">
              Não tem conta?{' '}
              <Link
                href={redirectToRegister}
                className="underline underline-offset-4"
              >
                Registrar-se
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
