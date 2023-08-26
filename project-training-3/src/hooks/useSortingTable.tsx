import { useState } from "react";
import { Users } from "@/hooks/useFetch";
type Order = "asc" | "desc";

export const useSortingTable = (): [
  (property: keyof Users) => void,
  <T>(
    array: Users[] | undefined,
    comparator: (a: T, b: T) => number
  ) => T[] | undefined,
  <Key extends string | number | symbol>(
    order: Order,
    orderBy: Key
  ) => (a: { [key in Key]: number }, b: { [key in Key]: number }) => number,
  Order,
  keyof Users
] => {
  const [oneOderDirection, setOneOderDirection] = useState<Order>("asc");
  const [valueToOrderBy, setvalueToOrderBy] = useState<keyof Users>("name");

  const createSortHandle = (property: keyof Users) => {
    handleRequestSort(property);
  };
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (a[orderBy] < b[orderBy]) {
      return -1;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (a: { [key in Key]: number }, b: { [key in Key]: number }) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function sortedTableRow<T>(
    array: Users[] | undefined,
    comparator: (a: T, b: T) => number
  ) {
    const stabilizedThis = array?.map(
      (el, index) => [el, index] as [T, number]
    );

    stabilizedThis?.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis?.map((el) => el[0]);
  }
  const handleRequestSort = (property: keyof Users) => {
    const isAscending =
      valueToOrderBy === property && oneOderDirection === "asc";
    setvalueToOrderBy(property);
    setOneOderDirection(isAscending ? "desc" : "asc");
  };
  return [
    createSortHandle,
    sortedTableRow,
    getComparator,
    oneOderDirection,
    valueToOrderBy,
  ];
};
