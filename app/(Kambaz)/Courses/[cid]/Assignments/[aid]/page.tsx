export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br/>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
            <td><label htmlFor="wd-group">Assignment Group</label></td>
            <td> 
                <select id="wd-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                </select> 
            </td>
        </tr>
        <tr>
            <td><label htmlFor="wd-display-grade-as">Display Grade as</label></td>
            <td> 
                <select id="wd-display-grade-as">
                    <option value="Percentage">Percentage</option>
                    <option value="GPA">GPA</option>
                    <option value="Alphabet">Alphabet</option>
                </select> 
            </td>
        </tr>
        <tr>
            <td><label htmlFor="wd-submission-type">Submission Type</label></td>
            <td> 
                <select id="wd-submission-type">
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select> 
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                Online Entry Options <br />
                <input type="checkbox" name="wd-online-entry-options" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label> <br/>
                <input type="checkbox" name="wd-online-entry-options" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label> <br/>
                <input type="checkbox" name="wd-online-entry-options" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label> <br/>
                <input type="checkbox" name="wd-online-entry-options" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label> <br/>
                <input type="checkbox" name="wd-online-entry-options" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label> <br/>
            </td>
        </tr>
        <tr>
            <td><label htmlFor="assign-to">Assign</label></td>
            <td>
                <label htmlFor="assign-to">Assign to</label><br/>
                <input id="assign-to" />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <label htmlFor="wd-due-date">Due</label><br/>
                <input type="date" id="wd-due-date" />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <label htmlFor="wd-available-from">Available from</label><br/>
                <input type="date" id="wd-available-from" />
            </td>
            <td>
                <label htmlFor="wd-available-until">Available until</label><br/>
                <input type="date" id="wd-available-until" />
            </td>
        </tr>
      </table>
      <hr/>
      <div>
        <button id="wd-cancel">Cancel</button>
        <button id="wd-save">Save</button>
      </div>
    </div>
);}
