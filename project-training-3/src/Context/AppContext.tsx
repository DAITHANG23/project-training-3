import { createContext, useState } from "react";
import { Users } from "@/hooks/useFetch";

interface IProps {
  children: React.ReactNode;
}

export type AppContextType = {
  UsersData: Users[] | undefined;

  onSetData: (data: Users[]) => void;

  onSetOpen: (data: boolean) => void;

  open: boolean;

  onChoosePage: (value: string) => void;

  titleHeader: string;

  imageHeader: string;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: IProps) => {
  const [data, setData] = useState<Users[] | undefined>();

  const [onPage, setOnPage] = useState("users");

  const [open, setOpen] = useState<boolean>(false);

  const onSetData = (data: Users[]) => {
    setData(data);
  };

  const onSetOpen = (data: boolean) => {
    setOpen(data);
  };

  const onChoosePage = (value: string) => {
    setOnPage(value);
  };

  let titleHeader = "Users";

  let imageHeader = "./images/user.png";

  if (onPage === "user") {
    titleHeader = "Users";

    imageHeader = "./images/user.png";
  } else if (onPage === "role") {
    titleHeader = "Role & Permission";

    imageHeader = "../images/privacy.png";
  }

  return (
    <AppContext.Provider
      value={{
        UsersData: data,
        onSetData,
        onSetOpen,
        open: open,
        onChoosePage,
        imageHeader,
        titleHeader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
