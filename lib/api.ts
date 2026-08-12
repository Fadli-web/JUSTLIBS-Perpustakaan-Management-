const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

type ApiResponse<T = any> = {
  ok: boolean;
  status: number;
  data: T;
};

async function request<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  let data: any = null;
  try {
    data = await res.json();
  } catch {
    // response tidak punya body JSON
  }

  return { ok: res.ok, status: res.status, data };
}

export const authApi = {
  register: (payload: { nama: string; email: string; password: string }) =>
    request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  login: (payload: { email: string; password: string }) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
};