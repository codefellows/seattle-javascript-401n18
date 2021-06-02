import React, {useState} from 'react';
import {ListGroup, Modal, Button} from 'react-bootstrap';

function Family(props) {

  const [activePerson, setActivePerson] = useState('');
  const [family, setFamily] = useState(props.people)
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = (person) => {
    setActivePerson(person);
    setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  }

  return (
    <>
    <ListGroup horizontal>
      {
        family.map( (person =>
          <ListGroup.Item key={person} onClick={ () => showModal(person) }>{person}</ListGroup.Item>
          ))
      }
    </ListGroup>

      <Modal show={modalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>You clicked on {activePerson}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Family;
