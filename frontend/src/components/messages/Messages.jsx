import useGetMessages from "../../hooks/useGetMessages";
import { useEffect, useRef } from "react";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {

	const { messages, loading } = useGetMessages();
	const lastMessageRef = useRef();
	useListenMessages();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
		}, 100);
	}, [messages]);
	return (

		<div className='px-4 flex-1 overflow-y-auto max-h-[400px] md:max-h-[500px]'>
    {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
    {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
            <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
                <Message message={message} />
            </div>
        ))}
    {!loading && messages.length === 0 && (
        <p className='text-center text-white'>Send a message to start the conversation</p>
    )}
</div>
	); 
};
export default Messages;