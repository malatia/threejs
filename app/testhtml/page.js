import { Cockpit } from "@/app/components/Cockpit";
import MessageScreen from "../components/MessageScreen";
import {FleetManagerTest, useTestState} from "@/app/hooks/useTestState"
import FleetManager from "@/app/components/FleetManager";


export default function Home() {
  return (
    <div>
      {/* <FleetManager/>       */}
      {/* <FleetManagerTest/> */}
      <FleetManager/>

    </div>
  );
}
