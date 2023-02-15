import { useEffect, useMemo, useState } from 'react';
import './PokerTable.scss';
import { PokerUser } from './ui/PokerUser';

const maxUsers = 15;
const tableStates = ['Draft', 'Planning', 'Voting', 'FinishedVoting', 'Closed'];

export default function PokerTable() {
  const [userCount, setUsersCount] = useState(3);
  const [tableState, setTableState] = useState('Closed');

  const addUser = () => {
    setUsersCount((count) => Math.min(maxUsers, count + 1));
  };
  const removeUser = () => {
    setUsersCount((count) => Math.max(0, count - 1));
  };

  const users = useMemo(() => {
    return Array.from({ length: userCount }).map((_, i) => i);
  }, [userCount]);

  return (
    <div>
      <span>
        Users: {userCount} of {maxUsers}
      </span>
      <div className="Container">
        <div className={`Table ${tableState}`}>
          <div className={`Users-${users.length}`}>
            {users.map((id) => {
              return (
                <div className="UserContainer">
                  <PokerUser />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button onClick={addUser}>Add user</button>
      <button onClick={removeUser}>Remove user</button>
      <div>
        <span>States:</span>
        <div>
          {tableStates.map(state => (
            <button key={state} onClick={() => setTableState(state)}>{state}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
