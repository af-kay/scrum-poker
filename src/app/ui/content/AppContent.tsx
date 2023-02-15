import './AppContent.scss'

export default function AppContent({ children }: React.PropsWithChildren) {
  return <main className="AppContent">{children}</main>;
}
