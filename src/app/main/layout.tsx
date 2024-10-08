
export default function Layout ({ children } : { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-red-300">
        <div className="flex-grow md:overflow-y-auto md:p-2">{children}</div>
    </div>
    )
}