export default function vttToText(vttContent: string) {
  if (!vttContent) throw new Error("File is empty");

  let plainText = "";
  let isTimeStamp = false;

  // Skip lines containing time stamps
  for (const line of vttContent.split("\n")) {
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
