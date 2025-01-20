import { redirectToLogin } from '@/constants/links';
import {redirect} from 'next/navigation';

export default function Home() {
  redirect(redirectToLogin)
}
