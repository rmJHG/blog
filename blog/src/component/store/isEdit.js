import { useState, createContext } from "react";

const EditInfo = createContext({
  isOpen: false,
  postId: 0,
  refreshNum: 0,
  openEdit: () => {},
  exitEdit: () => {},
  refresh: () => {},
});

export function EditContextProvider(props) {
  const [pageRefresh, setPageRefresh] = useState(-1);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [postId, setPostId] =useState(0);
  const [postData, setPostData] = useState(0);
  function refresh() {
    setPageRefresh(pageRefresh * -1);
  }


  function setOpenEdit(data) {
    setPostId(data.id)
    setPostData(data);
    setIsOpenEdit(true);

    
  }
  function setExitEdit() {
    setIsOpenEdit(false);
    refresh()
  }

  const EditValue = {
    isOpen: isOpenEdit,
    postData: postData,
    postId : postId,
    refreshNum: pageRefresh,
    openEdit: setOpenEdit,
    exitEdit: setExitEdit,
    refresh: refresh,
  };
  return <EditInfo.Provider value={EditValue}>{props.children}</EditInfo.Provider>;
}

export default EditInfo;
