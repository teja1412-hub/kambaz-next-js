import { Button, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
export default function AssignementControls() {
 return (
   <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center my-2 gap-2">
    <InputGroup className="w-50" size="lg">
        <InputGroupText>
          <FaSearch />
        </InputGroupText>
        <FormControl
          type="text"
          placeholder="Search..."
          aria-label="Search assignments"
        />
      </InputGroup>
    <div className="d-flex gap-2">
           <Button variant="secondary" size="lg" id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
      <Button variant="danger" size="lg" id="wd-collapse-alln">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>
    </div>
   </div>
);}
