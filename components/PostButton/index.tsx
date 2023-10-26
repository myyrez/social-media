'use client'
export default function PostButton() {
    function alertbutton() {
        alert('oi')
    }
    return (
        <button onClick={alertbutton} className="bg-neutral-50 rounded-full w-fit font-bold px-6 p-2">Post</button>
    )
}