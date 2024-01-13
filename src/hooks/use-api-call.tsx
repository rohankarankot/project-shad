interface ApiError {
  status: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any // You can replace 'any' with a more specific error data type
}

interface ApiResponse<T> {
  data?: T
  error?: ApiError | unknown
}

async function callApi<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      // Handle non-successful responses
      const errorData = await response.json()
      return { error: { status: response.status, data: errorData } as ApiError }
    }

    const data = await response.json()
    return { data }
  } catch (error) {
    // Handle network errors
    return { error: { status: 0, data: error } as ApiError }
  }
}

export default callApi
