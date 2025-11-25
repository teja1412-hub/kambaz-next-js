import { useState } from "react";
export default function EventObject() {
  const [event, setEventInfo] = useState<string | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const info = {
      type: e.type,
      target: (e.target as HTMLElement).outerHTML,
      currentTarget: (e.currentTarget as HTMLElement).outerHTML,
    };
    setEventInfo(JSON.stringify(info, null, 2));
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr/>
    </div>
);}
