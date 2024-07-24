import React from 'react'

const commentData = [
    {
        name: "Shreyansh",
        text: "enfnjregre",
        replies: [

        ]
    },
    {
        name: "Shreyansh",
        text: "enfnjregre",
        replies: [
            {
                name: "Shreyansh",
                text: "enfnjregre",
                replies: [
                    {
                        name: "Shreyansh",
                        text: "enfnjregre",
                        replies: [
                            {
                                name: "Shreyansh",
                                text: "enfnjregre",
                                replies: [
                                    {
                                        name: "Shreyansh",
                                        text: "enfnjregre",
                                        replies: [
                                            {
                                                name: "Shreyansh",
                                                text: "enfnjregre",
                                                replies: [

                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Shreyansh",
        text: "enfnjregre",
        replies: [
            {
                name: "Shreyansh",
                text: "enfnjregre",
                replies: [
                    {
                        name: "Shreyansh",
                        text: "enfnjregre",
                        replies: [

                        ]
                    },
                ]
            },
        ]
    },

]

const Comment = ({ data }) => {

    const { name, text, replies } = data;
    return <div className="flex shadow-sm bg-gray-100 p-2">
        <img
            className="w-12 h-12"

            alt="user" src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png" />

        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ))
}


const CommentContainer = () => {

    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Commnets:</h1>
            <CommentList comments={commentData} />
        </div>
    )
}




export default CommentContainer;