'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { buttonVariants } from '@/components/ui/button';

const CREDENTIALS_KEY = 'mrqz-admin-credentials';

export default function AdminLoginPage() {
  const router = useRouter();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const stored = localStorage.getItem(CREDENTIALS_KEY);
      if (!stored) {
        return;
      }

      const parsed = JSON.parse(stored);
      if (typeof parsed !== 'object' || parsed === null) {
        return;
      }

      if (typeof parsed.login === 'string') {
        setLogin(parsed.login);
      }

      if (typeof parsed.password === 'string') {
        setPassword(parsed.password);
      }
    } catch {
      // ignore invalid JSON
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ login, password }),
    });

    setIsLoading(false);

    if (response.ok) {
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(
            CREDENTIALS_KEY,
            JSON.stringify({ login, password }),
          );
        } catch {
          // ignore storage errors
        }
      }
      router.push('/admin');
      return;
    }

    const data = (await response.json().catch(() => null)) ?? {};
    setError(data.message ?? 'Неверный логин или пароль');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <AlertDialog open>
        <AlertDialogContent className="mx-auto w-full max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Вход в админку</AlertDialogTitle>
            <AlertDialogDescription>
              Введите логин и пароль из переменных окружения.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <label className="block text-sm font-medium text-slate-900 dark:text-slate-200">
              Логин
              <Input
                className="mt-2"
                type="text"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                required
                autoComplete="username"
              />
            </label>
            <label className="block text-sm font-medium text-slate-900 dark:text-slate-200">
              Пароль
              <Input
                className="mt-2"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
              />
            </label>
            {error && (
              <p className="text-sm text-rose-600 dark:text-rose-400" role="alert">
                {error}
              </p>
            )}
            <AlertDialogFooter className="mt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`${buttonVariants()} w-full`}
              >
                {isLoading ? 'Проверка…' : 'Войти'}
              </button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
