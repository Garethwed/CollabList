import { RoomProvider,useUpdateMyPresence } from "./liveblocks.config";
import { Room } from "./Room";
import { ClientSideSuspense } from "@liveblocks/react";
import {useState} from "react"
import {LiveList } from "@liveblocks/client"



export default function App() {
  const [draft,setDraft] = useState("");
  const updateMyPresence = useUpdateMyPresence();
  return (
    <RoomProvider id="my-room" initialPresence={{}} initialStorage={{todos: new LiveList() , seen:new LiveList()}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => <Room />}

      </ClientSideSuspense>
    </RoomProvider>
  );
}




