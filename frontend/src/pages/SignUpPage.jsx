import { MessageCircleCode } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import useSignup from '../hooks/useSignup.js'

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const {isPending, error, signupMutation} = useSignup();

  const handleSignup = (e) => {
    e.preventDefault()
    signupMutation(signupData);
  }

  return (
    <div
      className='h-screen flex items-center justify-center p-4 sm:p-6 md:p-8' data-theme="forest">

      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">

        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">

          <div className="mb-4 flex items-center justify-start gap-2">
            <MessageCircleCode className="w-9 h-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              ConvoX
            </span>
          </div>

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>

            )}

          <div className="w-full">
            <form onSubmit={handleSignup}>

              <div className='space-y-4'>
                <div>
                  <h2 className='text-xl font-semibold'>Create an Account</h2>
                  <p className='text-sm opacity-70'>Join ConvoX and Start Chating with Friends !</p>
                </div>
                <div className='space-y-3'>
                  {/*######################FULL NAME###################*/}
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Full Name</span>
                    </label>

                    <input
                      type='text'
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({...signupData, fullName: e.target.value})}
                      placeholder='Enter your full name'
                      className='input input-bordered w-full'
                      required
                    />

                  </div>
                  {/*################EMAIL##########################*/}
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>

                    <input
                      type='email'
                      value={signupData.email}
                      onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                      placeholder='Enter your email address'
                      className='input input-bordered w-full'
                      required
                    />

                  </div>
                  {/*################PASSWORD##########################*/}
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>

                    <input
                      type='password'
                      value={signupData.password}
                      onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                      placeholder='*********'
                      className='input input-bordered w-full'
                      required
                    />
                    <p className='text-xs opacity-70 mt-1'>Password must be of 6 characters long</p>

                  </div>

                </div>
                <button className='btn btn-primary w-full' type='submit'>
                  {isPending? (
                    <>
                    <span className='loading loading-spinner loading-xs'></span>
                    Loading...
                    </>
                  ) : (
                    "Create an Account"
                  )}
                  
                </button>

                <div className='text-center mt-4'>
                  <p className='text-sm'>
                    Already have an account?{' '}
                    <Link to='/login' className='text-primary hover:underline'>
                    Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </form>

          </div>


        </div>

        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/i.png" alt="Connection illustration" className="w-full h-full" />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Connect with Friends any time</h2>
              <p className="opacity-70">
                Do conversations, make friends, and discuss together.
              </p>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default SignUpPage
