import { useState } from "react";
import "../assets/css/messenger.css";
import Content from "../Components/Content";
import Sidebar from "../Components/Sidebar";

export default function Messenger() {
    const [chat, setChat] = useState(false);
    return (
        <div className="messenger">
        <Sidebar setChat={setChat}/>
        <Content chat={chat} setChat={setChat}/>
        </div>
    );
}