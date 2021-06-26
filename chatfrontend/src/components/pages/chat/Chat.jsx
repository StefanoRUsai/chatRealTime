import { to_Decrypt, to_Encrypt } from "../../../common/aes";
import { process } from "../../../store/action/index";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, Input, Button } from "@material-ui/core";

const Chat = ({ username, roomname, socket }) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch();

  const dispatchProcess = (encrypt, msg, cipher) => {
    dispatch(process(encrypt, msg, cipher));
  };

  useEffect(() => {
    socket.on("message", (data) => {
      const ans = to_Decrypt(data.text, data.username);
      dispatchProcess(false, ans, data.text);
      console.log(ans);
      let temp = messages;
      temp.push({
        userId: data.userId,
        username: data.username,
        text: ans,
      });
      setMessages([...temp]);
    });
  }, [socket]);

  const sendData = () => {
    if (text !== "") {
      const ans = to_Encrypt(text);
      socket.emit("chat", ans);
      setText("");
    }
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  console.log(messages, "mess");

  return (
    <Box className="chat">
      <Box className="user-name">
        <Typography variant="h2">
          {username} <span style={{ fontSize: "0.7rem" }}>in {roomname}</span>
        </Typography>
      </Box>
      <Box className="chat-message">
        {messages.map((i) => {
          if (i.username === username) {
            return (
              <Box className="message">
                <p>{i.text}</p>
                <span>{i.username}</span>
              </Box>
            );
          } else {
            return (
              <Box className="message mess-right">
                <p>{i.text} </p>
                <span>{i.username}</span>
              </Box>
            );
          }
        })}
        <Box ref={messagesEndRef} />
      </Box>
      <Box className="send">
        <Input
          placeholder="enter your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendData();
            }
          }}
        ></Input>
        <Button onClick={sendData}>Send</Button>
      </Box>
    </Box>
  );
};

export default Chat;
