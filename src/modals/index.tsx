import React from "react"
import { useUi } from "@hooks/useUserInterface"
import { modalType } from "@store/slices/ui.slice"
import Modal from "./components/Modal"

const ModalWrapper = () => {
  const { modal } = useUi()

  const AllModal = {
    [modalType.none]: <></>
  }

  return <>{modal && <Modal>{AllModal[modal]}</Modal>}</>
}

export default ModalWrapper
