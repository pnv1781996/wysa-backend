import { connect as _connect } from "mongoose";
const CONN_STRING =
  "mongodb+srv://admin:FHi6930IWbubKGkU@wysacluster.20oeksm.mongodb.net/wysa?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    const connect = await _connect(CONN_STRING);
    console.log(
      "database connect---",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default connectDb;
