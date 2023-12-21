import MenuItem from "./MenuItem";
import { HomeIcon, NotificationIcon, SettingsIcon } from "./icons";

export default function SideMenu() {
  return (
    <aside>
        <ul>
          <MenuItem url="/" text="Home" icon={<HomeIcon />} />
          <MenuItem url="/settings" text="Settings" icon={<SettingsIcon />} />
          <MenuItem url="/notifications" text="Notifications" icon={<NotificationIcon />} />
        </ul>
    </aside>
  )
}
