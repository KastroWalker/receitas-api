import app from "./app";

const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
