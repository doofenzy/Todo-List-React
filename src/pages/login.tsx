// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/1ADs2FRNaQg
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal } from 'lucide-react';

const Login = () => {
  const [formData, setFormdata] = useState({
    username: '',
    password: '',
  });

  const loginMutation = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="mx-auto max-w-sm mt-20">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="JohnDoe"
                required
                name="username"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            {loginMutation.isError ? (
              <Alert variant="destructive" className="mb-4">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Invalid</AlertTitle>
                <AlertDescription>
                  {loginMutation.error?.response?.data?.message ||
                    loginMutation.error?.response?.data?.errors?.[0]?.message ||
                    loginMutation.error?.message ||
                    'Signup failed. Please try again.'}
                </AlertDescription>
              </Alert>
            ) : loginMutation.showError ? (
              <Alert variant="default" className="mb-4">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Account created!</AlertTitle>
                <AlertDescription>
                  Your account has been successfully registered. You can now log
                  in.
                </AlertDescription>
              </Alert>
            ) : null}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
