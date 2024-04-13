import connectToDB from "@/utils/db"


export async function GET(req) {

    const { isConnected } = await connectToDB();
    return Response.json({ message: "Succcess Response", status: isConnected })
}

