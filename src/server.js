import app from "./app.js";

if (process.env.ENVIRONMENT !== "production") {
    import("dotenv").then((dotenv) =>
        dotenv.config({
            path: "./env",
        })
    );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
