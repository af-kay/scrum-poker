import PokerTable from '../../features/poker-table';
import './PokerRoom.scss';

export function PokerRoom() {
  return (
    <div className="PokerRoom">
      <div className="Table">
        <PokerTable />
      </div>
    </div>
  );
}
