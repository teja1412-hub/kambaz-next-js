import { Modal, Button, Form } from "react-bootstrap";

interface GroupEditorProps {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  groupName: string;
  setGroupName: (name: string) => void;
  groupPercent: number;
  setGroupPercent: (percent: number) => void;
  addGroup: () => void;
}

export default function GroupEditor({
  show,
  handleClose,
  dialogTitle,
  groupName,
  setGroupName,
  groupPercent,
  setGroupPercent,
  addGroup,
}: GroupEditorProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addGroup();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>

      <Form>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="groupName">
            <Form.Label>Group Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="groupPercent">
            <Form.Label>Percentage of Total</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter percentage"
              value={groupPercent}
              onChange={(e) => setGroupPercent(Number(e.target.value))}
              min={0}
              max={100}
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Group
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
