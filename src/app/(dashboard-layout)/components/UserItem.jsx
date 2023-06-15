'use client';
import Image from "next/image";
import axios from 'axios';
import Link from "next/link";

import { useRouter } from "next/navigation";


export const UserItem = ({className}) => {
    const router = useRouter();

    const getProfile = async () => {
        const response = await axios.get('/api/profile');
        console.log(response);
      };

    const logout = async (e) => {
        e.preventDefault();
        const result = await axios.post('/api/auth/logout');
        if (result.status == 200) {
          router.push('/');
        }
      };

    return (
        <div className={className}>
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <Image width={100} height={100} src="/pandora.png" alt='user-logo' />
                </div>
            </label>
            <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <Link href="" className="justify-between">
                    Perfil
                    <span className="badge">inf</span>
                    </Link>
                </li>
                <li><Link href="">Ajustes</Link></li>
                <li><button onClick={logout}>Cerrar Sesión</button></li>
                {/*<li><Link href={'/auth/login'}>Iniciar Sesión</Link></li>*/}
            </ul>
        </div>
    )
}