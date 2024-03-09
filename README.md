# VTT to Text Converter for Deno

This is a lightweight and efficient module written in TypeScript for converting WebVTT (`.vtt`) files to plain text format. Built for Deno, it offers a seamless solution for developers to extract textual content from VTT files, making it easier to work with closed captions, subtitles, or any other textual data stored in the WebVTT format.

## Usage

```typescript
import vttToText from "https://deno.land/x/vtt_to_text/mod.ts";

const vttContent = await Deno.readTextFile("example.vtt");
const text = vttToText(vttContent);
console.log(text);
