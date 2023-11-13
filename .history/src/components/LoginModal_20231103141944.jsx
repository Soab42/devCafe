import React from "react";
import Modal from "../common/modal/index";
export default function LoginModal() {
  const { show, onClose, onSubmit, children, cname } = [];

  const title = "Login form";

  return <Modal title={title} show={true} children={<div>hi</div>} />;
}
