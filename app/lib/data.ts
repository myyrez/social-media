import { sql } from '@vercel/postgres';
import { User, Post, Likes, Comments } from './definitions';

export async function fetchUser() {
    try {
        const data = await sql<User>`SELECT * FROM users`
        return data.rows
    } catch (error) {
        console.error('DB error:', error)
        throw new Error('failed to fetch users')
    }
}

export async function fetchPost() {
    try {
        const data = await sql<Post>`
            SELECT * FROM posts
            JOIN users ON posts.user_id = users.user_id
        `
        return data.rows
    } catch (error) {
        console.error('DB error:', error)
        throw new Error('failed to fetch posts')
    }
}

export async function fetchLikes() {
    try {
        const data = await sql<Likes>`
            SELECT * FROM likes
            JOIN posts ON likes.post_id = posts.post_id
        `
        return data.rows
    } catch (error) {
        console.error('DB error:', error)
        throw new Error('failed to fetch likes')
    }
}

export async function fetchComments() {
    try {
        const data = await sql<Comments>`
            SELECT * FROM comments
            INNER JOIN posts ON comments.post_id = posts.post_id
            LEFT JOIN users ON comments.user_id = users.user_id
        `
        return data.rows
    } catch (error) {
        console.error('DB error:', error)
        throw new Error('failed to fetch comments')
    }
}