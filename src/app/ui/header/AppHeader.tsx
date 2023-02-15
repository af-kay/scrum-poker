import './AppHeader.scss';

export default function AppHeader() {
  return (
    <div className="AppHeader">
      <div>Scrum Poker</div>
      <ul className="Items">
        <li>[Settings]</li>
        <li>[Invite people]</li>
        <li>[Login / Sign in]</li>
      </ul>
    </div>
  );
}
