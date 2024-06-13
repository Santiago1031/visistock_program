'use client'

import { Form } from '@/components/Form';
import { useLoading } from '@/hooks/useLoading';
import { useAuthFetch } from '@/hooks/useAuthFetch';

export default function LoginPage () {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()

  const login = async (formData: any) => {
    startLoading()
    await authFetch({
      endpoint: 'login',
      redirectRoute: '/home',
      formData
    })
    finishLoading()
  }

  return (
    <>
      <Form
      title="VISISTOCK"
      onSubmit={login}
      >
        <div className="my-[10px] flex flex-col gap-4">
          <Form.Input
          label="Usuario"
          name="email"
          placeholder="Ingresa tu correo..." 
        />
          <Form.Input
          placeholder="Ingresa tu contraseña..." 
          label="Contraseña"
          name="password"
          type="password"
        />
        </div>
        <Form.SubmitButton buttonText="Iniciar sesión" isLoading={isLoading}/>
          <Form.Footer
          description="¿Olvidaste tu contraseña?"
          link="/forget-password"
          textLink="Recuperar contraseña"
        />
          <Form.Footer
          description="¿No tienes cuenta?"
          link="/register"
          textLink="Registrate"
        />
      </Form>
    </>  
  );
}
