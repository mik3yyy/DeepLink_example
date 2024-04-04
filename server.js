import express from 'express';
const app = express();

// Sample blog data
const blogDataList = [
    {
        title: "Sample Blog Post 1",
        author: "John Doe",
        content: "This is the content of sample blog post 1.",
        published_at: "2024-04-01"
    },
    {
        title: "Sample Blog Post 2",
        author: "Jane Smith",
        content: "This is the content of sample blog post 2.",
        published_at: "2024-04-02"
    },
    {
        title: "Sample Blog Post 3",
        author: "Alice Johnson",
        content: "This is the content of sample blog post 3.",
        published_at: "2024-04-03"
    },
    {
        title: "Sample Blog Post 4",
        author: "Bob Brown",
        content: "This is the content of sample blog post 4.",
        published_at: "2024-04-04"
    },
    {
        title: "Sample Blog Post 5",
        author: "Eva Green",
        content: "This is the content of sample blog post 5.",
        published_at: "2024-04-05"
    }
];

// Endpoint to handle GET requests to '/blog'
app.get('/blog/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < blogDataList.length) {
        res.json(blogDataList[index]);
    } else {
        res.status(404).json({ error: "Blog not found" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
