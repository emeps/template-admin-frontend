"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { redirectToRegister } from "@/constants/links";
import { GoogleLogin } from '@/components/GoogleLogin';
import { Separator } from '@/components/Separator';

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Entrar</CardTitle>
                    <CardDescription>
                        Entre com seu email e senha para acessar a plataforma.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
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
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Esqueceu sua senha?
                                    </a>
                                </div>
                                <Input id="password" type="password" placeholder={'****************'} />
                            </div>
                            <Button type="submit" className="w-full">
                                Entrar
                            </Button>
                            <Separator text="Ou continue com"/>
                            <GoogleLogin/>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Não tem conta?{' '}
                            <Link href={redirectToRegister} className="underline underline-offset-4">
                                Registrar-se
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
