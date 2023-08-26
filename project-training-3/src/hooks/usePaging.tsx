import { useState } from "react";

export const usePaging = (): [
  number,
  number,
  (event: unknown, newPage: number) => void,
  (event: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return [page, rowsPerPage, handleChangePage, handleChangeRowsPerPage];
};
