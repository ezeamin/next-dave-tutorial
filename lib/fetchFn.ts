type ModeTypes = 'json' | 'blob' | undefined;

interface Result<T, Mode extends ModeTypes> {
  isSuccess: boolean;
  isError: boolean;
  error: any;
  data: (Mode extends 'blob' ? Blob : T) | null;
}

interface FetchFnProps<T> {
  url: RequestInfo | URL;
  options?: RequestInit | undefined;
  mode?: ModeTypes;
  adapter?: ((data: any) => T) | undefined;
}

export const fetchFn = async <T>({
  url,
  options,
  mode,
  adapter,
}: FetchFnProps<T>): Promise<Result<T, typeof mode>> => {
  try {
    let data: Result<T, typeof mode>['data'] = null;

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('An error occurred');
    }

    switch (mode) {
      case 'blob':
        data = await response.blob();
        break;
      case 'json':
      default:
        data = await response.json();
        break;
    }

    if (adapter) {
      data = adapter(data);
    }

    return {
      isSuccess: true,
      isError: false,
      error: null,
      data,
    };
  } catch (error) {
    return {
      isSuccess: false,
      isError: true,
      error: error,
      data: null,
    };
  }
};

// TODO: REFETCH, SKIP
