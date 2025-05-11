import { useAppContext } from "@/context/AppContext"
import { useChatRoom } from "@/context/ChatContext"
import { useSocket } from "@/context/SocketContext"
import { ChatMessage } from "@/types/chat"
import { SocketEvent } from "@/types/socket"
import { formatDate } from "@/utils/formateDate"
import { FormEvent, useRef } from "react"
import { LuSendHorizonal } from "react-icons/lu"
import { v4 as uuidV4 } from "uuid"

function ChatInput() {
    const { currentUser } = useAppContext()
    const { socket } = useSocket()
    const { setMessages } = useChatRoom()
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const inputVal = inputRef.current?.value.trim()

        if (inputVal && inputVal.length > 0) {
            const message: ChatMessage = {
                id: uuidV4(),
                message: inputVal,
                username: currentUser.username,
                timestamp: formatDate(new Date().toISOString()),
            }
            socket.emit(SocketEvent.SEND_MESSAGE, { message })
            setMessages((messages) => [...messages, message])

            if (inputRef.current) inputRef.current.value = ""
        }
    }

    return (
        <form
            onSubmit={handleSendMessage}
            className="flex justify-between rounded-md border-2 border-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 p-[2px] shadow-lg"
        >
            <div className="w-full flex-grow bg-gray-900 rounded-md p-3">
                <input
                    type="text"
                    className="w-full bg-transparent text-white placeholder-gray-400 outline-none border-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Type a message..."
                    ref={inputRef}
                />
            </div>
            <button
                className="flex items-center justify-center rounded-r-md bg-gradient-to-r from-pink-500 to-indigo-600 p-3 text-white transition-transform transform hover:scale-105 hover:from-pink-600 hover:to-indigo-700"
                type="submit"
            >
                <LuSendHorizonal size={24} />
            </button>
        </form>
    )
}

export default ChatInput
