import { Cockpit } from "@/app/components/Cockpit";
import MessageScreen from "../components/MessageScreen";

export default function Home() {
  return (
    <div>
      <img className="size-15" src="planets.png" style={{clipPath: 'polygon(33% 17%, 71% 18%, 100% 36%, 100% 61%, 69% 80%, 32% 80%, 0 62%, 0 34%);'}}/>
    </div>
  );
}
