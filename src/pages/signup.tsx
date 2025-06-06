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
import useSignup from '../hooks/useSignup';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const signupMutation = useSignup();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signupMutation.mutate(formData);
  };

  return (
    <Card className="mx-auto max-w-sm mt-20">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Signup</CardTitle>
        <CardDescription>
          Enter your email and password to signup your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Your username"
                required
                value={formData.username}
                onChange={handleChange}
                name="username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={signupMutation.isPending}
            >
              {signupMutation.isPending ? 'Signing up...' : 'Sign Up'}
            </Button>
            {signupMutation.isError ? (
              <Alert variant="destructive" className="mb-4">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Invalid</AlertTitle>
                <AlertDescription>
                  {signupMutation.error?.response?.data?.message ||
                    signupMutation.error?.response?.data?.errors?.[0]
                      ?.message ||
                    signupMutation.error?.message ||
                    'Signup failed. Please try again.'}
                </AlertDescription>
              </Alert>
            ) : signupMutation.showSuccess ? (
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
              Already have an account?{' '}
              <a href="/" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Signup;
