import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import { database } from "../../firebase"
import { useAuth } from "../../AuthContext"
import { ROOT_FOLDER } from "../../useFolder"

export default function AddFolderButton({ currentFolder }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const { currentUser } = useAuth()

  function openModal() {
    setOpen(true)
  }
  function closeModal() {
    setOpen(false)
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (currentFolder == null) return
    const path = [...currentFolder.path]
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id })
    }
    database.folders.add({
      name: name, parentId: currentFolder.id, userId: currentUser.uid, path: path, createdAt: database.getCurrentTimestamp(),
    })
    setName("")
    closeModal()
  }

  return (
    <>
      <Button onClick={openModal} variant="outline-danger" size="lg">
        <FontAwesomeIcon icon={faFolderPlus} style={{fontSize:35}} />
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form className="bg-light border border-danger rounded" onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label className="text-danger">Folder Name</Form.Label>
              <Form.Control type="text" className="bg-light text-dark border border-primary rounded" required value={name}onChange={e => setName(e.target.value)}/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button className="col-3 bg-danger border border-primary rounded" onClick={closeModal}>
              Close
            </Button> 
            <Button className="col-3 bg-danger border border-primary rounded" type="submit">
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
