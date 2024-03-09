import { existsSync } from "https://deno.land/std@0.219.1/fs/mod.ts";

export default function vttToText(vttPath: string) {
  let vtt;
  let plainText = "";

  try {
    const vttExists = existsSync(vttPath);
    if (!vttExists) throw new Error("Error: vtt file not found.");
    if (!vttPath.endsWith(".vtt"))
      throw new Error("Invalid file extension. Please provide a .vtt file");
    vtt = Deno.readTextFileSync(vttPath);
    if (!vtt) throw new Error("File is empty");
  } catch (error) {
    console.error(error);
    return error;
  }

  let isTimeStamp = false;

  // Skip lines containing time stamps
  for (const line of vtt.split("\n")) {
    if (line.includes("-->")) {
      isTimeStamp = true;
      continue;
    }

    // Skip the following line after time stamps
    if (isTimeStamp) {
      isTimeStamp = false;
      continue;
    }

    // Remove any HTML tags and extra spaces
    const text = line.replace(/<[^>]+>/g, "").trim();

    // Skip empty lines
    if (!text) continue;
    plainText += text + " ";
  }

  return plainText.slice(35).trim();
}
