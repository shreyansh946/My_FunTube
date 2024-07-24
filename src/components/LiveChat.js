import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../Utils/ChatSlice';
import ChatMessage from './ChatMessage';
import { generateRandomName, RandomMessage } from '../Utils/Helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  const [LiveMessage, setLiveMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    setLoading(true);
    const i = setInterval(() => {
      dispatch(addMessages({
        name: generateRandomName(),
        message: RandomMessage(30),
      }));
    }, 2000);

    setLoading(false);
    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className='w-full h-[600px] ml-2 p-2 border border-black flex flex-col-reverse bg-slate-100 rounded-lg overflow-y-scroll'>
        {loading ? (
          <p className="text-gray-500 text-center">Loading chat...</p>
        ) : (
          <div>
            {ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} Message={c.message} />
            ))}
          </div>
        )}
      </div>

      <form className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessages({
            name: "Shreyansh",
            message: LiveMessage,
          }));
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 px-3"
          type="text"
          value={LiveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="bg-slate-400 p-1 px-5"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
