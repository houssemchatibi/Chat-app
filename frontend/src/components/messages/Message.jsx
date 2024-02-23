const Message = ({ message }) => {
	

	return (
		<div className={`chat chat-start`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component'  />
				</div>
			</div>
			<div className={`chat-bubble text-white bg-blue-500 shake pb-2`}>Hello </div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>22:00</div>
		</div>
	);
};
export default Message;