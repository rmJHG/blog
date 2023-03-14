import { useState, createContext } from "react";

const EditInfo = createContext(
  {
    isOpen: false,
    openEdit: () => {},
    exitEdit: () => {},
    editPoint:() => {},
  },
);

export function EditContextProvider(props) {
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  function setOpenEdit() {
    setIsOpenEdit(true);
  }
  function setExitEdit() {
    setIsOpenEdit(false);
  }


  const EditValue = 
    {
      isOpen: isOpenEdit,
      openEdit: setOpenEdit,
      exitEdit: setExitEdit,

    };
  return <EditInfo.Provider value={EditValue}>{props.children}</EditInfo.Provider>;
}

export default EditInfo;
