'use client'
export default function PostButton() {
    function alertbutton() {
        alert('oi')
    }
    return (
        <button onClick={alertbutton} className="bg-neutral-50 text-neutral-900 rounded-full w-fit font-bold px-6 py-1">Post</button>
    )
}