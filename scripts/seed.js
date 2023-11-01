const { sql } = require('@vercel/postgres');
const { users } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers() {
    try {
        const createTable = await sql`
            CREATE TABLE IF NOT EXISTS users (
                user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name VARCHAR(32) NOT NULL,
                username VARCHAR(16) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(60) NOT NULL,
                created_at TIMESTAMPTZ DEFAULT NOW()
            );
        `;
        console.log("user table created")
        const hashed = await bcrypt.hash('test', 10)
        
        const insertUsers = await Promise.all([
            sql`
                INSERT INTO users (name, username, email, password)
                    VALUES ('actual mary', 'mary', 'mary@gmail.com', ${hashed})
            `,
            sql`
                INSERT INTO users (name, username, email, password)
                    VALUES ('actual james', 'james', 'james@gmail.com', ${hashed})
            `
        ])
        console.log(`seeded ${insertUsers.length} users`)

        return {
            createTable,
            users: insertUsers
        }
    } catch(error) {
        console.error('error sending users:', error)
        throw error
    }
}

async function seedPosts() {
    try {
        const createTable = await sql`
            CREATE TABLE IF NOT EXISTS posts (
                post_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                user_id INT NOT NULL,
                content TEXT NOT NULL,
                created_at TIMESTAMPTZ DEFAULT NOW(),
                CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (user_id)
            );
        `
        console.log('posts table created')

        const insertPosts = await Promise.all([
            sql`
                INSERT INTO posts (user_id, content)
                    VALUES (1, 'content placeholder content placeholder content placeholder')
            `,
            sql`
                INSERT INTO posts (user_id, content)
                    VALUES (1, 'content placeholder content placeholder content placeholder')
            `,
            sql`
                INSERT INTO posts (user_id, content)
                    VALUES (2, 'content placeholder content placeholder content placeholder')
            `
        ])
        console.log(`seeded ${insertPosts.length} posts`)

        return {
            createTable,
            insertPosts
        }
    } catch (error) {
        console.error('error sending posts:', error)
        throw error
    }
}

async function seedFollows() {
    try {
        const createTable = await sql`
            CREATE TABLE IF NOT EXISTS follows (
                follower_id INT NOT NULL,
                followed_id INT NOT NULL,
                CONSTRAINT fk_follower FOREIGN KEY (follower_id) REFERENCES users (user_id),
                CONSTRAINT fk_followed FOREIGN KEY (followed_id) REFERENCES users (user_id),
                CONSTRAINT follows_pk PRIMARY KEY (follower_id, followed_id)
            );
        `
        console.log('follows table created')

        const insertFollows = await Promise.all([
            sql`
                INSERT INTO follows (follower_id, followed_id)
                    VALUES (1, 2)
            `,
            sql`
                INSERT INTO follows (follower_id, followed_id)
                    VALUES (2, 1)
            `
        ])
        console.log(`seeded ${insertFollows.length} follows`)

        return {
            createTable,
            insertFollows
        }
    } catch (error) {
        console.error('error sending follows:', error)
        throw error
    }
}

async function seedLikes() {
    try {
        const createTable = await sql`
            CREATE TABLE IF NOT EXISTS likes (
                user_id INT NOT NULL,
                post_id INT NOT NULL,
                CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (user_id),
                CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES posts (post_id),
                CONSTRAINT likes_pk PRIMARY KEY (user_id, post_id)
            );
        `
        console.log('likes table created')
    
        const insertLikes = await Promise.all([
            sql`
                INSERT INTO likes (user_id, post_id)
                    VALUES (1, 1)
            `,
            sql`
                INSERT INTO likes (user_id, post_id)
                    VALUES (2, 1)
            `
        ])
        console.log(`seeded ${insertLikes.length} likes`)
    
        return {
            createTable,
            insertLikes
        }
    } catch (error) {
        console.error('error sending likes:', error)
        throw error
    }
}

async function seedComments() {
    try {
        const createTable = await sql`
            CREATE TABLE IF NOT EXISTS comments (
                comment_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                user_id INT NOT NULL,
                post_id INT NOT NULL,
                comment_replied_id INT,
                content TEXT NOT NULL,
                created_at TIMESTAMPTZ DEFAULT NOW(),
                CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (user_id),
                CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES posts (post_id),
                CONSTRAINT fk_comment_replied 
                    FOREIGN KEY (comment_replied_id) 
                    REFERENCES comments (comment_id)
            );
        `
        console.log('comments table created')
    
        // const insertComments = await Promise.all([
        //     sql`
        //         INSERT INTO comments (user_id, post_id, comment_replied_id, content) VALUES (1, 1, NULL, 'marys comment to her post')
        //     `,
        //     sql`
        //         INSERT INTO comments (user_id, post_id, comment_replied_id, content) VALUES (2, 1, 1, 'james comment on marys comment of her post')
        //     `,
        //     sql`
        //         INSERT INTO comments (user_id, post_id, comment_replied_id, content) VALUES (1, 1, 2, 'marys comment on james comment of marys post')
        //     `,
        //     sql`
        //         INSERT INTO comments (user_id, post_id, comment_replied_id, content) VALUES (1, 2, NULL, 'marys comment on james post')
        //     `,
        //     sql`
        //         INSERT INTO comments (user_id, post_id, comment_replied_id, content) VALUES (2, 2, 4, 'james comment on marys comment of his post')
        //     `
        // ])
        // console.log(`seeded ${insertComments.length} comments`)

        return {
            createTable,
            // insertComments
        }
    } catch (error) {
        console.error('error sending comments:', error)
        throw error
    }
}

(async () => {
    await seedUsers()
    await seedPosts()
    await seedFollows()
    await seedLikes()
    // await seedComments()
})()