import {
  Banknote,
  Building,
  Eye,
  FileSearch,
  Lock,
  Search,
  Shield,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  banknote: Banknote,
  building: Building,
  eye: Eye,
  "file-search": FileSearch,
  lock: Lock,
  search: Search,
  shield: Shield,
  "user-check": UserCheck,
  users: Users,
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Search
  return <Icon className={className} aria-hidden="true" />
}
