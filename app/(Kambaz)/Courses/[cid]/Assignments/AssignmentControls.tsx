import { useRouter } from "next/navigation";
import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import GroupEditor from "./GroupEditor"; // similar to ModuleEditor

export default function AssignementControls({
  courseId,
  addGroup,
  searchTerm,
  setSearchTerm,
  groups, // pass current groups to validate total percent
}: {
  courseId: string;
  addGroup: (name: string, percent: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  groups: { id: string; name: string; percent: number }[];
}) {
  const [showGroup, setShowGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupPercent, setGroupPercent] = useState(0);
  const router = useRouter();

  const handleCloseGroup = () => {
    setShowGroup(false);
    setGroupName("");
    setGroupPercent(0);
  };
  const handleShowGroup = () => setShowGroup(true);

  const handleAddGroup = () => {
  if (!groupName.trim()) return;
  addGroup(groupName, groupPercent);
  handleCloseGroup();
};

  return (
    <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center my-2 gap-2">
      <InputGroup className="w-50" size="lg">
        <InputGroupText><FaSearch /></InputGroupText>
        <FormControl
          type="text"
          placeholder="Search..."
          aria-label="Search assignments"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      <div className="d-flex flex-wrap justify-content-end gap-2 mb-0">
        <Button variant="secondary" size="lg" onClick={handleShowGroup}>
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </Button>
        <Button
          variant="danger"
          size="lg"
          onClick={() => router.push(`/Courses/${courseId}/Assignments/new`)}
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
      </div>

      <GroupEditor
        show={showGroup}
        handleClose={handleCloseGroup}
        dialogTitle="Add Group"
        groupName={groupName}
        setGroupName={setGroupName}
        groupPercent={groupPercent}
        setGroupPercent={setGroupPercent}
        addGroup={handleAddGroup}
      />
    </div>
  );
}
