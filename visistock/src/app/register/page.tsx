'use client'

import { Form } from '@/components/Form';
import { useLoading } from '@/hooks/useLoading';
import { useAuthFetch } from '@/hooks/useAuthFetch';

export default function LoginPage () {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()

  const register = async (formData: any) => {
    startLoading()
    await authFetch({
      endpoint: 'Register',
      redirectRoute: '/home',
      formData
    })
    finishLoading()
  }

  return (
    <>
      <Form
      title="Registrate"
      onSubmit={register}
      description='Formulario para crear una cuenta'
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
          <Form.Input
          placeholder="Confirma tu contraseña..." 
          label="Contraseña"
          name="confirmPassword"
          type="password"
        />
        </div>
        <Form.SubmitButton buttonText="Crear cuenta" isLoading={isLoading} />
          <Form.Footer
          description="¿Ya tienes cuenta?"
          textLink="Inicia sesión"
          link="/"
        />
      </Form>
    </>  
  );
}