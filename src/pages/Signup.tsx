
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const Signup: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!form.name || !form.email || !form.password) {
      setError("Please fill all fields.");
      setLoading(false);
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // Insert into profiles
    const user = data.user;
    if (user) {
      await supabase.from("profiles").upsert({
        id: user.id,
        name: form.name,
      });
    }

    toast({ title: "Account created!", description: "Welcome to StorySparkVR 🎉" });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8f0fc] to-[#e0c3fc]">
      <div className="flex max-w-4xl w-full rounded-3xl shadow-xl bg-white overflow-hidden">
        {/* Left visual/prompt */}
        <div className="hidden md:flex flex-col justify-center items-center relative w-1/2 p-10 bg-gradient-to-br from-indigo-200 via-pink-100 to-indigo-50">
          <div className="absolute top-8 right-8 w-20 h-20 bg-pink-200 rounded-full opacity-50 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-6 left-6 w-24 h-24 bg-indigo-200 rounded-full opacity-40 blur-2xl animate-pulse"></div>
          <div className="z-10 text-center">
            <h2 className="text-3xl font-extrabold mb-3 text-indigo-700">Welcome to StorySparkVR!</h2>
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">Create stunning narrated videos from your images – in any language.</h3>
            <p className="text-sm text-gray-500 mb-4">A free, open-source tool made for creators, educators, and families.</p>
            <img src="/lovable-uploads/da0e5593-03b3-4523-86ab-96e1973762a8.png" alt="Visual sign up" className="rounded-xl w-40 mx-auto shadow-lg" />
          </div>
        </div>
        {/* Right form */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-2 text-indigo-700">Sign Up</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
              required
              autoComplete="name"
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
              required
              autoComplete="email"
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              disabled={loading}
              required
              minLength={6}
              autoComplete="new-password"
            />
            <Button type="submit" className="w-full py-2 text-lg" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
          <div className="mt-4 text-sm text-gray-700">
            Already have an account?{" "}
            <Link to="/signin" className="text-indigo-600 hover:underline font-semibold">
              Sign in here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
