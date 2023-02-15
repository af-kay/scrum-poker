import { useEffect, useMemo, useState } from 'react';
import './PokerTable.scss';
import { PokerUser } from './ui/PokerUser';

const maxUsers = 15;

export default function PokerTable() {
  const [userCount, setUsersCount] = useState(3);

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
      <div
        className="Container"
        onClick={(e) => {
          e.stopPropagation();
          removeUser();
        }}
      >
        <div
          className="Table"
          onClick={(e) => {
            e.stopPropagation();
            addUser();
          }}
        >
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
    </div>
  );
}
