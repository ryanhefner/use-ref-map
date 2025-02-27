import React from 'react'

interface HookResponse {
  getRef: (key: string) => React.RefObject<unknown> | undefined | void;
  setRef: (key: string, initialValue?: unknown | undefined | null) => React.RefObject<unknown> | void;
  refMap: Map<string, React.RefObject<unknown>>;
}

declare function useRefMap(): HookResponse;

export = useRefMap
