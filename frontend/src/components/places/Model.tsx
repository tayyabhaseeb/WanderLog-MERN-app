"use client";

import { Modal } from "flowbite-react";

interface Component {
  openModel: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  header: string;
  body: React.ReactNode;
  footer: React.ReactNode;
}

function Model({ openModel, setOpenModal, header, body, footer }: Component) {
  return (
    <>
      <Modal show={openModel} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-purple-500">
          <h2 className=" text-white text-2xl font-bold">{header}</h2>
        </Modal.Header>
        <Modal.Body>
          {/* Would implement React leaflet here later */}
          {body}
        </Modal.Body>
        <Modal.Footer className="flex justify-end">{footer}</Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;
