import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Message from '../components/Message'
import { useEffect, useState } from 'react'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup
  .object({
    firstName: yup.string().required("First Name is a required field"),
    lastName: yup.string().required("Last Name is a required field"),
    npi: yup.number().positive().integer().required("NPI is a required field").typeError('NPI is a number field'),
    address: yup.string().required('Address is a required field'),
    telephone: yup.string().matches(phoneRegExp, 'Please provide a valid phone number'),
    email: yup.string().email('Please provde a correct email address')
    .required('Email is a required field')
  })
  .required()

const Registration = () => {
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 3000)
  }, [alert])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = (data: any) => {
    console.log(data)
    setAlert(true)
    reset()
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <Message message="Data Logged" show={alert}/>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-4 md:space-y-6'
      >
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a
            href='#'
            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
          >
            Healthcare Registration Form
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Create an account
              </h1>
              <div>
                <label
                  htmlFor='firstName'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  First Name
                </label>
                <input
                  {...register('firstName')}
                  type='firstName'
                  name='firstName'
                  id='firstName'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Jonh'
                />
                <p className='text-red-500 text-xs italic'>{errors.firstName?.message}</p>
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Last Name
                </label>
                <input
                  {...register('lastName')}
                  type='lastName'
                  name='lastName'
                  id='lastName'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Doe'
                />
                <p className='text-red-500 text-xs italic'>{errors.lastName?.message}</p>
              </div>
              <div>
                <label
                  htmlFor='npi'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  NPI
                </label>
                <input
                  {...register('npi')}
                  type='npi'
                  name='npi'
                  id='npi'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='1234567890'
                />
                <p className='text-red-500 text-xs italic'>{errors.npi?.message}</p>
              </div>{' '}
              <div>
                <label
                  htmlFor='address'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Business address
                </label>
                <input
                  {...register('address')}
                  type='address'
                  name='address'
                  id='address'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='123 Main St, City, State, Zip Code'
                />
                <p className='text-red-500 text-xs italic'>{errors.address?.message}</p>
              </div>{' '}
              <div>
                <label
                  htmlFor='telephone'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Telephone Number
                </label>
                <input
                  {...register('telephone')}
                  type='telephone'
                  name='telephone'
                  id='telephone'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='123-456-7890'
                />
                <p className='text-red-500 text-xs italic'>{errors.telephone?.message}</p>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <input
                  {...register('email')}
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                />
                <p className='text-red-500 text-xs italic'>{errors.email?.message}</p>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Create an account
              </button>
            </div>
          </div>
        </div>

        <input type='submit' />
      </form>
    </section>
  )
}
export default Registration
