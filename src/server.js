import ip from "ip";
import app from "./app";

const ipAddress = ip.address();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at ${ipAddress}:${port}`);
});
