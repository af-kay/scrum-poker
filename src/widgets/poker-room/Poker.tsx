import { PokerRoom } from './PokerRoom';
import PokerTable from '../../features/poker-table/ui/PokerTable';
import { PokerUser } from '../../features/poker-table/ui/PokerUser';

type Props = {
  roomId?: string;
};

export default function Poker({ roomId }: Props) {
  return (
    <div>
      {roomId && <span>Scrum poker room with id={roomId}</span>}
      {!roomId && <span>New scrum poker room</span>}
      <div>
        <PokerRoom />
      </div>
    </div>
  );
}
