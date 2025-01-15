import React, { useState } from "react";
import Action from "./Action/Action";
import "./Styles.css";
import Arrow from "../NestedComent/Assets/Arrow";

function Comments(props) {
  const { comment } = props;
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleOnchange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleOnclick = (type) => {
    if (type === "EDIT") {
      setEditMode(true);
    }
  };
  return (
    <div>

      <div>
        {comment?.commentid == 1 ? (
          <div>
            <input
              type="text"
              placeholder="Write comment"
              onChange={handleOnchange}
              value={input}
            ></input>
            <Action
              type="COMMENT"
              onClick={handleOnclick}
              className={"COMMENT"}
            />
          </div>
        ) : (
          <>
            <span
              style={{
                background: "grey",
                padding: "10px",
                wordBreak: "break-word",
                minHeigh: "40px",
                width: "300px",
                display: "inline-block",
                margin: "10px",
              }}
            >
              {comment?.name}

              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                {editMode ? (
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <Action
                      type="SAVE"
                      onClick={handleOnclick}
                      className={"noraml-button"}
                    />

                    <Action
                      type="CANCEL"
                      onClick={() => setEditMode(false)}
                      className={"noraml-button"}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    {expand ? (
                      <div style={{ transform: "rotate(180deg)" }}>
                        <Arrow />{" "}
                      </div>
                    ) : (
                      <div>
                        <Arrow />
                      </div>
                    )}
                    <Action
                      type="REPLY"
                      onClick={() => {
                        setShowInput(true);
                        setExpand(!expand);
                      }}
                      className={"noraml-button"}
                    />

                    <Action
                      type="EDIT"
                      onClick={() => {
                        setEditMode(true);
                      }}
                      className={"noraml-button"}
                    />

                    <Action
                      type="DELETE"
                      onClick={() => setShowInput(false)}
                      className={"noraml-button"}
                    />
                  </div>
                )}
              </div>
            </span>
            {showInput && (
              <div style={{ display: "block", display: "flex", gap: "10px" }}>
                <input
                  placeholder="Add a comment"
                  value={input}
                  onChange={handleOnchange}
                />
                <span style={{ display: "flex", gap: "10px" }}>
                  <Action
                    type="REPLY"
                    onClick={handleOnclick}
                    className={"noraml-button"}
                  />
                  <Action
                    type="CANCEL"
                    onClick={() => {
                      setShowInput(false);
                      setExpand(!expand);
                    }}
                    className={"noraml-button"}
                  />
                </span>
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: "35px" }}>
        {comment?.items?.map((el) => {
          return <Comments key={el?.id} comment={el} />;
        })}
      </div>

    </div>
  );
}

export default Comments;
