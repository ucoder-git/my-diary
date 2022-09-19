import React from 'react';
import { useState } from "react"

export default function DiaryForm() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleData = (event) => {
        if (event.target.id === 'tit') {
            setTitle(event.target.value);
        } else if (event.target.id === "txt") {
            setText(event.target.value);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title, text);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>일기 쓰기</legend>
                    <label htmlFor="tit">일기 제목 : </label>
                    <input id="tit" type='text' required onChange={handleData} />

                    <label htmlFor="txt">일기 내용 : </label>
                    <textarea id="txt" type='text' required onChange={handleData}></textarea>

                    <button type="submit">저장하기</button>
                </fieldset>
            </form>
        </>
    )
}