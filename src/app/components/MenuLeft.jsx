import Link from "next/link";



export const MenuLeft = () => {
    return (
        <div className=" drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link href={''}>Estrategias</Link></li>
                    <li><Link href={''}>Áreas de Resultados Claves</Link></li>
                    <li><Link href={''}>Organización</Link></li>
                    <li><Link href={''}>Control</Link></li>
                    <li><Link href={''}>Reportes</Link></li>
                    <li>
                        <details close>
                            <summary>Configuraciones</summary>
                            <ul>
                                <li><Link href={''}>Acesores</Link></li>
                                <li><Link href={''}>Colaboradores del Departamento</Link></li>
                                <li><Link href={''}>Jefe de Disciplinja del Departamento</Link></li>
                                <li><Link href={''}>Gestión Roles Usuarios</Link></li>
                                <li><Link href={''}>Colectivo de Carrera</Link></li>
                                <li><Link href={''}>Colectivo de Año</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            
            </div>
        </div>
    );
}