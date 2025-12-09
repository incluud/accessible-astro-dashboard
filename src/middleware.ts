import { defineMiddleware } from 'astro:middleware'

// Define which routes require authentication
const PROTECTED_ROUTES = ['/', '/users', '/products', '/messages', '/media', '/settings']

// Define public routes (don't require auth)
const PUBLIC_ROUTES = ['/login', '/404']

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context
  const pathname = url.pathname

  // Check if user is authenticated via cookie
  const authToken = cookies.get('auth-token')
  const isAuthenticated = authToken?.value === 'authenticated'

  // Handle login form submission
  if (pathname === '/login' && context.request.method === 'POST') {
    try {
      const formData = await context.request.formData()
      const email = formData.get('email') as string
      const password = formData.get('password') as string

      // Simple authentication check (you'd want to use proper auth in production)
      if (email === 'admin@astro.demo' && password === 'Astronaut570') {
        // Set authentication cookie
        cookies.set('auth-token', 'authenticated', {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: '/',
        })

        // Redirect to dashboard
        return redirect('/')
      } else {
        // Redirect back to login with error
        return redirect('/login?error=invalid')
      }
    } catch (error) {
      console.error('Login error:', error)
      return redirect('/login?error=server')
    }
  }

  // Handle logout
  if (pathname === '/logout') {
    cookies.delete('auth-token', { path: '/' })
    return redirect('/login')
  }

  // Check if route requires authentication
  const requiresAuth = PROTECTED_ROUTES.some(
    (route) => pathname === route || (route !== '/' && pathname.startsWith(route)),
  )

  // Redirect unauthenticated users to login
  if (requiresAuth && !isAuthenticated) {
    return redirect('/login')
  }

  // Redirect authenticated users away from login page
  if (pathname === '/login' && isAuthenticated) {
    return redirect('/')
  }

  // Continue to the requested page
  return next()
})
