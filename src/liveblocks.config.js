import { createClient,LiveList } from "@liveblocks/client"
import { createRoomContext } from "@liveblocks/react"


const client = createClient({
  publicApiKey:
    "pk_dev_tfiZ-KP-oDvqS69MoSBbCwEHNtFi9sZezH-bTXgD9zk_dreuyC1tQ8wlzhruGJND"
  // authEndpoint: "/api/auth",
  // throttle: 100,
})

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener
  }
} = createRoomContext(client)
