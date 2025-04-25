async function fetchCustom<TResponse>(url: string, init: RequestInit) {
  const config = {
    ...init,
    headers: {
      ...init.headers,
    },
  };

  const response = await fetch(url, config);

  if (response.ok) {
    return response.json() as TResponse;
  }

  throw new Error(response.statusText);
}

const requester = {
  get: <TResponse>(url: string) => fetchCustom<TResponse>(url, { method: 'GET' }),
};

export default requester;
