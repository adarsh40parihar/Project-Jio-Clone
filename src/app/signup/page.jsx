"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="bg-[#0C0A09] flex justify-center items-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#1a1a1a] rounded-lg shadow-xl p-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold text-white mb-2"
          >
            Create an Account
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-6"
          >
            Enter your information to create an account
          </motion.p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label
                htmlFor="name"
                className="block text-base font-medium text-gray-200 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-[#0C0A09] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent transition-all"
                required
                minLength={5}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-200 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                className="w-full px-4 py-2 bg-[#0C0A09] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E11D48]
                focus:border-transparent transition-all"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-200 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-[#0C0A09] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent transition-all"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <label
                htmlFor="confirm-password"
                className="block text-base font-medium text-gray-200 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 bg-[#0C0A09] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent transition-all"
                required
                minLength={6}
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#E11D48] hover:bg-[#E11D48]/90 text-white font-semibold py-2 rounded-lg transition-colors relative overflow-hidden disabled:opacity-50 "
            >
              {isLoading ? (
                <div className="flex items-center justify-center ">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin "></div>
                </div>
              ) : (
                "Create Account"  
              )}
            </motion.button>
          </form>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center text-base"
          >
            <div className="text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-white hover:text-[#E11D48] transition-colors"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
