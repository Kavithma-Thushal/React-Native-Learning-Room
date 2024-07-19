import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function API() {

    interface Post {
        id: number;
        title: string;
    }

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json() as Post[];
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <View>
            <Text>API</Text>
            {posts.map(post => (
                <Text key={post.id}>{post.title}</Text>
            ))}
        </View>
    );
}
