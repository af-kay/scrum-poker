import { useState } from 'react';
import './PokerUser.scss';

export function PokerUser() {
  const [isDone, setDone] = useState(false);

  return (
    <div
      className={`PokerUser ${isDone ? 'Done' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={() => setDone((prev) => !prev)}
    >
      <p>User</p>
      {isDone ? <p>✔️</p> : <p>&nbsp;</p>}
    </div>
  );
}
