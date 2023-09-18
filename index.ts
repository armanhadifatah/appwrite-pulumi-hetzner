import * as hcloud from "@pulumi/hcloud";
import * as fs from "fs";

const cloudInitData = fs.readFileSync("cloudInitConfig.yaml", "utf-8");


// Create a Hetzner Cloud server
const server = new hcloud.Server("appwrite-server", {
    image: "ubuntu-22.04",
    serverType: "cpx11",
    // location germany-fra1
    location: "nbg1",
    userData: cloudInitData 
});

export const serverIp = server.ipv4Address;
