import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  console.log(props);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId="a6aef1ce-d208-4ad0-84f7-3395b56f4914"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;
