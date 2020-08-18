import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from 'auth/firebase-auth'

function Signin () {
  const auth = useAuth()
  const router = useRouter()
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    auth.signin(data.email, data.password)
      .then(router.push('/'))
      .catch((err) => alert(err))
  }

  return (
    <div className=''>
      <form
        className='flex items-center justify-center h-screen bg-gray-100 text-gray-800'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='w-screen flex justify-center flex-wrap'>
          <div className='mb-4'>
            <div className='flex justify-center'>
              <img className='h-40' src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg' alt='logo' />
            </div>
            <div className='text-3xl leading-9 font-bold overflow-auto'>Sign in to your account</div>
            <div className='flex justify-center text-md font-light text-gray-600'>
              <Link href='/signup'><span>or create <span className='text-indigo-700 cursor-pointer hover:underline'>new account</span></span></Link>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <input
              className='w-full h-12 mx-4 rounded mb text-2xl mb-1 p-2 shadow active:shadow-outline md:w-1/3'
              name='email'
              type='email'
              placeholder='Email address'
              ref={register({ required: true })}
            />
          </div>
          <div className='w-full flex justify-center'>
            <input
              className='w-full h-12 mx-4 rounded shadow mb-2 text-2xl p-2 active:shadow-outline md:w-1/3'
              name='password'
              type='password'
              placeholder='Password'
              ref={register({ required: true })}
            />
          </div>
          <div className='w-full flex justify-center'>
            <button
              className='w-full h-12 mx-4 rounded shadow text-2xl text-gray-100 bg-indigo-700 hover:bg-indigo-500 cursor-pointer md:w-1/3'
              type='submit'
            >Sign In
            </button>
          </div>
          <div className='flex justify-center text-red-600 h-6 w-1/3 text-sm'>
            {(errors.password || errors.email) && <div>Please fill out email and password.</div>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signin
