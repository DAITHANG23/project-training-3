import { useState, useRef } from "react";

export const useSearching = (): [
  string,

  (event: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [search, setSearch] = useState("");

  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!setSearch) return;
    typingTimeoutRef.current = setTimeout(() => {
      setSearch(value);
    }, 0);
  };
  return [search, onSearchHandler];
};
