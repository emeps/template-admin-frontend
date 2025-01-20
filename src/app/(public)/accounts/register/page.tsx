import { RegisterForm } from "@/app/(public)/accounts/register/index";
import { BoxForm } from '@/components/BoxForm';

export default function Page() {
    return (
      <BoxForm>
        <RegisterForm />
      </BoxForm>
    );
}
