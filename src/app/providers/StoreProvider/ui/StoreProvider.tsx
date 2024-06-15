import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { CreateReduxStore } from "../config/store";
import { StateShema } from "../config/StateShema";
import { useNavigate } from "react-router-dom";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: Partial<StateShema>;
}
export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
}) => {
  const navigate = useNavigate();

  const store = CreateReduxStore(initialState as StateShema, navigate);
  return <Provider store={store}>{children}</Provider>;
};

export { CreateReduxStore };
