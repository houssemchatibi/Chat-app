import useGetMessages from "../../hooks/useGetMessages";
import { useEffect } from "react";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {

	const { messages, loading } = useGetMessages();
	useEffect(() => {
		console.log(messages)
	}, [messages]);
	return (

		<div className='px-4 flex-1 overflow-auto'>
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} >
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