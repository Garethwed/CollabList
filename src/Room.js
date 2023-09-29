import { useOthers,useUpdateMyPresence,useStorage,useMutation } from "./liveblocks.config";
import {useState} from "react"
import {LiveList} from "@liveblocks/client";
import "./Room.css";

export function Room() {
  const others = useOthers();
  const userCount = others.length;

  const [draft,setDraft] = useState("");
  const updateMyPresence = useUpdateMyPresence();
  const todos = useStorage((root) => root.todos);
  const seen = useStorage((root) => root.seen);

  const someoneIsTyping = useOthers((others) =>
    others.some((other) => other.presence.isTyping)
  );  

  const addTodo = useMutation(({ storage }, text) => {
    storage.get("todos").push({text})
    //storage.get("seen").push({text})

  }, []);
  const addseen = useMutation(({ storage }, text) => {
    storage.get("seen").push({text})
    //deleteTodo((text.indexOf(text)));
    //storage.get("seen").push({text})

  }, []);

  const deleteTodo = useMutation(({ storage }, index) => {
    storage.get("todos").delete(index);
  }, []);
  const deleteSeen = useMutation(({ storage }, index) => {
    storage.get("seen").delete(index);
  }, []);

  return <div>There are {userCount} other user(s) online {someoneIsTyping ? " - Someone is typing..." : ""}
        {/* <div className="someone_is_typing">
            {someoneIsTyping ? "Someone is typing..." : ""}
            </div> */}

    <div className="top">
    <input className="inputField"
            type="text"
            placeholder="What to watch?"
            value={draft}
            onChange={(e) => {
            setDraft(e.target.value);
            updateMyPresence({ isTyping: true });
            }}
            onKeyDown={(e) => {
            if (e.key === "Enter") {
                updateMyPresence({ isTyping: false });
                addTodo(draft);
                setDraft("");
            }
            }}
            onBlur={() => updateMyPresence({ isTyping: false })}
            
        />
      </div>
      <div>
 
        <div>
            <div className="headings">
                <div className="columntitle">To Watch</div>
                <div className="columntitle">Seen</div>
            </div>
            <div className="table">
                <div className="bottom">
                    {todos.map((todo, index) => {
                        return (
                        <div key={index} className="todo_container">
                            <div className="todo">{todo.text}</div>
                            <div className="buttonGroup">
                              <button
                              className="delete_button"
                              onClick={() => deleteTodo(index)}
                              >
                              ✕
                              </button>
                              <button className="delete_button"
                              onClick={() => 
                                  {addseen(todo.text); deleteTodo(index)} }
                              >→</button>
                            </div>

                        </div>
                        );
                    })}
                </div>
                <div className="bottom2">
                {seen.map((seen, index) => {
                        return (
                        <div key={index} className="todo_container">
                            <div className="todo">{seen.text}</div>
                            <button
                            className="delete_button"
                            onClick={() => deleteSeen(index)}
                            >
                            ✕
                            </button>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>
      
  </div>;
  
}

